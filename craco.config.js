const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('tailwindcss/nesting'),
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }
    },
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utility': path.resolve(__dirname, 'src/utility'),
            '@resources': path.resolve(__dirname, 'src/resources'),
        },
    },
}