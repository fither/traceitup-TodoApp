module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    testMatch: ['**/src/**/*.spec.[jt]s?(x)', '**/src/*.spec.[jt]s?(x)']
}
