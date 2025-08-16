import axios from "axios";
import { EXTERNAL_BASE_URL } from "./constants";

//Search for an Item
export async function searchItem(item: string) {
  const iconSearch = $('~tag_search_icon');
  const inputSearch = $('~tag_header_search_input');

  await iconSearch.waitForDisplayed({ timeout: 5000 });
  await iconSearch.click();
  await inputSearch.waitForDisplayed({ timeout: 5000 });
  await inputSearch.addValue(item);
  await iconSearch.click();
}

export async function getConfig() {
  const getUrl = `${EXTERNAL_BASE_URL}/v1/config`;

  try {
    const response = await axios.get(getUrl);

    // Assertions
    expect(response.status).toBe(200);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error; // Rethrow the error to fail the test
  }
}

export async function postAuthUrl(authUrl: any) {
  const postUrl = authUrl;
  const postData = {
    username: '',
    pwd: '',
    redirect_uri: '',
    client_secret: '',
    client_id: ''
  }
  const postHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*",
  }

  try {
    const response = await axios.post(postUrl, postData, {
      headers: postHeaders
    })
    // Assertions
    expect(response.status).toBe(200);
    return response.data;

  } catch (error) {
    console.error('Error making POST request:', error);
    throw error; // Rethrow the error to fail the test
  }
}

export async function postTokenUrl() {
  const configData = await getConfig();
  const authData = await postAuthUrl(configData.authUrl);
  const code = new URLSearchParams(authData).get('code');
  const postUrl = configData.tokenUrl;
  const postData = {
    code: code,
    redirect_uri: '',
    client_secret: '',
    client_id: ''
  }
  const postHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  try {
    const response = await axios.post(postUrl, postData, {
      headers: postHeaders
    })
    // Assertions
    expect(response.status).toBe(200);
    console.log(response.data.access_token)
    return response.data.access_token;

  } catch (error) {
    console.error('Error making POST request:', error);
    throw error; // Rethrow the error to fail the test
  }
}

export async function getUserModel() {
  const accessToken = await postTokenUrl();
  const getUrl = `${EXTERNAL_BASE_URL}/v1/userModel`;
  const getHeaders = {
    'X-API-TOKEN': accessToken,
  }

  try {
    const response = await axios.get(getUrl, {
      headers: getHeaders,
    });

    // Assertions
    expect(response.status).toBe(200);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error; // Rethrow the error to fail the test
  }

}