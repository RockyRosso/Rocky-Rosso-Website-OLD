export default defineNuxtConfig({

    css: ['assets/base.scss'],

    typescript: {
        strict: false,
        tsConfig: {
            compilerOptions: {
                types: [
                    'jquery'
                ]
            }
        }
    },

    app: {
        head: {
            title: 'Rocky Rosso',

            meta: [
                { name: 'description', content: 'Check out works done by Rocky Rosso' },
                { name: 'theme-color', content: '#2075cb' },
                { property: 'og:image', content: '/favicon.ico' }
            ],

            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css' }
            ],

            script: [
                {
                    src: "https://code.jquery.com/jquery-3.6.4.min.js",
                    type: 'text/javascript'
                }
            ]
        }
    },

    modules: ['@nuxt/content'],

    experimental: {
        payloadExtraction: false
    }
});
