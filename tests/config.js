exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: {
        'browserName': 'chrome'
    },
    
    specs: [
        'homePage/homeSpec.js'
    ],
    
    suites: {
        normal: 'specs/*Spec.js',
        pageObjects: 'homePage/homeSpec.js'
    },
    
    jasmineNodeOpts: {
        showColors: true
    },
    
    params: {
        siteUrl: 'http://goo.gl/MFNy9C'
    }
};
