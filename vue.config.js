const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // src alias '@'으로 설정
    config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));

    // api-client target 디렉토리 설정(* mock 폴더로 설정)
    const apiClient = 'mock';
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`)
    );
  },
});
