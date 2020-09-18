module.exports = {
    title: 'Waiioo Wiki',
    description: 'Persion Knowledge for waiioo studio',
    base: '/',
    host: '0.0.0.0',
    port: '9527',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '设计', link: '/design'},
            {text: '开发', link: '/code'},
            {text: '导航', link: '/navigation'}
        ],
        sidebar: {
            // '/'指的是根目录, 也就是 README.md 里面的内容
            '/': [
                {title: '首页', collapsable: false, children: ['/']}
            ]
        },
        sidebarPath: 5,
        lastUpdated: '更新时间'
    },
    // extend: '@vuepress/theme-default'
    //路径 别名
    // configureWebpack: {
    //     resolve: {
    //         img: {
    //             '@waiioo': ''
    //         }
    //     }
    // }
  }