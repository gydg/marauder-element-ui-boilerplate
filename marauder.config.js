module.exports = {
  globalEnv:{
    jsbridgeBuildType: "wap"
  },
  // 控制 js,css 文件名是否添加 MD5 后缀
  hash: false,
  // 出于性能考虑，babel 编译将忽略 node_modules 目录
  // 对于 es6 模块，通过 esm 配置，通知 babel 添加额外支持
  esm: "all",
  // 打包 dll(vendor) 文件
  vendor: [],
  // 静态资源 CDN 路径
  publicPath: "./",
  // 生成 js 与 css source map
  sourceMap: false,

  // hybrid 上线配置，hybrid 项目请放开注释
  // 应用此选项，生产环境下将生成 zip 包和 version 文件
  hybrid: {
    hb_frame_version:"0.8",
    app_version:"689",
    hb_pkg_info:""
  },

  ciConfig: {
    zip: true,
    zip_config_name: "sina_news"
  },
  // ftp 服务器配置
  ftp: {
    host: "172.16.142.74",
    port: 2121,
    user: "www",
    password: "0ecd15a9fee9dea3",
    // 远程路径配置
    remotePath: {
      version: false
    }
  }
};
