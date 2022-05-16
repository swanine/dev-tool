<p align="center">
  <img src="https://raw.githubusercontent.com/rosi-ui/rosi-ui/dev-swanine/packages/rosiui/public/rosi-logo-v2.png" width="170">
</p>


<h1 align="center">Rosi</h1>

<div align="center">

[![MIT License](https://img.shields.io/npm/v/rosi-ui?style=flat-square)](https://opensource.org/licenses/MIT)
[![MIT License](https://img.shields.io/github/license/rosi-ui/rosi-ui?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

<div align="center">

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Montserrat&color=FF466B&multiline=true&height=55&lines=Rosi+is+an+early+incubation+project;developed+using+Vue3+%2B+Vite+%2B+TSX)](https://git.io/typing-svg)

</div>

简体中文 | <a href="README.md">English</a>

## ✨ 特性
- 🧩 设计精美的组件可直接基于原型开发
- 🔑 支持 TypeScript
- ⚡ 支持按需引入
- 🎨 支持主题定制，并内置了漂亮的主题


## 🔨 安装

#### pnpm
```sh
pnpm install rosi-ui
```

#### yarn

```sh
yarn add rosi-ui
```

## 🔧 使用

在`main.ts`文件中引入`rosi-ui`

```ts
import { createApp } from 'vue'
import App from './App.vue'
// 引入 RosiUi 组件库及样式
import RosiUi from 'rosi-ui'
import 'rosi-ui/style.css'
createApp(App).use(RosiUi).mount('#app')
```

在`App.vue`文件中使用 RosiUi 组件

```vue
<template>
  <r-button>Hi Rosi</r-button>
</template>
```

## :dart: 浏览器兼容性

由于Vue 3不再支持 IE11, Rosi 不支持 Internet Explorer

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge ≥ 79                                                    | Firefox ≥ 78                                                 | Chrome ≥ 64                                                  | Safari ≥ 12                                                  |

## 📃 开源许可
<a href="LICENSE">MIT</a>
