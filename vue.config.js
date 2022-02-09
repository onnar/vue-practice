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
                    data: `
                        @import "@/assets/scss/app.scss";
                    `
                }
            }
        }
    }