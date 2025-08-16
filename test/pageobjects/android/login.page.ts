import { QA_ENV_URL } from "../../helpers/constants";
import Page from "../page";
import mainPage from "./main.page";


class LoginPage extends Page {
    
    get btnCustomer () { return $('~tag_customer_login_button') }
    get btnDealer () { return $('~tag_dealer_login_button') }
    get inputUsername () { return $('~tag_login_username_input') }
    get inputPassword () { return $('~tag_login_password_input') }
    get btnLogin () { return $('~tag_login_button') }
    get btnQAEnv () { return $('~tag_submit_qa_env_button') }
    get textQAEnv () { return $('~tag_env_link') }

    public async login (username: string, password: string) {
        await this.inputUsername.addValue(username);
        await this.inputPassword.addValue(password);
        await this.btnLogin.click();
        await mainPage.menuStorage.waitForDisplayed({ timeout: 10000 });
    }

    public async loginWithQAEnv (username: string, password: string) {
        await this.setQAEnv();
        await this.inputUsername.addValue(username);
        await this.inputPassword.addValue(password);
        await this.btnLogin.click();
        await mainPage.menuStorage.waitForDisplayed({ timeout: 10000 });
    }

    public async setQAEnv () {
        await this.inputUsername.addValue('');
        await this.inputPassword.addValue('');
        await this.btnLogin.click();
        await this.btnQAEnv.click();
        await expect(this.textQAEnv).toHaveText(QA_ENV_URL);
    }

}

export default new LoginPage;