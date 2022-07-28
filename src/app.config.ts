export default {
  pages: [
    'pages/home/index',
    'pages/forms/index',
    'pages/me/index',
    'pages/webview/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: '#dfdfdf',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home_on.png',
        text: '首页',
      },
      {
        pagePath: 'pages/forms/index',
        iconPath: './assets/images/tabbar/create.png',
        selectedIconPath: './assets/images/tabbar/create_on.png',
        text: '表单',
      },
      {
        pagePath: 'pages/me/index',
        iconPath: './assets/images/tabbar/forms.png',
        selectedIconPath: './assets/images/tabbar/forms_on.png',
        text: '我的',
      },
    ],
  },
}
