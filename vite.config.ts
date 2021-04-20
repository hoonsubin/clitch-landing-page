// details can be found here https://github.com/vitejs/vite/blob/master/src/node/config.ts
export default {
    vueCustomBlockTransforms: {
        i18n: ({ code }) => {
            // return transformed code
        }
    },
    cssPreprocessOptions: {
      scss: {
        additionalData:
        `
          @import './src/assets/style/_variables.scss';
          @import './src/assets/style/_mixins.scss';
        `
      }
    },
    //https: true,
    base: 'public',
};