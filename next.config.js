// require("dotenv").config();
 const withSass = require('@zeit/next-sass');

const withCSS = require("@zeit/next-css");

const withFonts = require("next-fonts");


module.exports = withCSS({


    // env: {
    //     API_URL: process.env.API_URL
    // }
});

module.exports = withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));