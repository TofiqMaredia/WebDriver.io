import { getUserModel, postTokenUrl, searchItem } from "../../helpers/utils";
import loginPage from "../../pageobjects/android/login.page"
import mainPage from "../../pageobjects/android/main.page";


describe('Storage - Grid', () => {
    it.only('should validate Bin details', async () => {
        const userData = await getUserModel();
        if (!(await mainPage.menuDashboard.isDisplayed()))
            await loginPage.loginWithQAEnv('', '');

        browser.pause(10000)
        await searchItem('Master');
    })
})
