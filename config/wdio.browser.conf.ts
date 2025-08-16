import { config as baseConfig } from "./wdio.shared.conf";

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    specs: ["../test/specs/**/browser*.spec.ts"],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            browserName: "chrome",
        },
        {
            browserName: "firefox",
        },
        {
            "wdio:maxInstances": 1,
            browserName: "safari",
        },
    ],
}