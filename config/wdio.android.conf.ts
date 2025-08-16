import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../test/specs/android/**/*.spec.ts"],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: "Android",
            "wdio:maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here

            //
            // NOTE: Change this name according to the Emulator you have created on your local machine
            "appium:deviceName": "Pixel 6 Pro",
            //
            // NOTE: Change this version according to the Emulator you have created on your local machine
            "appium:platformVersion": "13.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:appPackage": "com.intragrain.binsensemobile",
            "appium:newCommandTimeout": 240,
            "appium:noReset": true
        },
    ],
};