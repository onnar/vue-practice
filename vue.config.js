// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
    module.exports = {
        publicPath: '/vue-practice',
        outputDir: 'docs',
        css: {
            loaderOptions: {
                sass: {
                    prependData: `@import "@/assets/scss/app.scss";`
                    additionalData: `@import "@/assets/scss/app.scss";`
                }
            }
        }
    }