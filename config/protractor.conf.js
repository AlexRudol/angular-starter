require('ts-node/register');
var helpers = require('./helpers');

exports.config = {
    baseUrl: 'http://localhost:3000/',
    specs: [
        helpers.root('src/**/**.e2e.ts'),
        helpers.root('src/**/*.e2e.ts')
    ],
    exclude: [],
    framework: 'jasmine2',
    allScriptsTimeout: 110000,
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            //'args': ["--headless", "--disable-gpu", "--window-size=1280x800",  "--no-sandbox"]
            'args': ['show-fps-counter=true']
        }
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    useAllAngular2AppRoots: true,
    SELENIUM_PROMISE_MANAGER: false
};
