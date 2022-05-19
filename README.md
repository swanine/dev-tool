<p align="center">
  <img src="https://raw.githubusercontent.com/rosi-ui/rosi-ui/dev-swanine/packages/rosiui/public/rosi-logo-v2.png" width="170">
</p>


<h1 align="center">Rosi</h1>

<div align="center">

[![MIT License](https://img.shields.io/npm/v/rosi-ui?style=flat-square)](https://opensource.org/licenses/MIT)
[![MIT License](https://img.shields.io/github/license/rosi-ui/rosi-ui?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

<div align="center">

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Montserrat&multiline=true&height=55&lines=Rosi+is+an+early+incubation+project;developed+using+Vue3+%2B+Vite+%2B+TSX)](https://git.io/typing-svg)
 
</div>

English | <a href="README.zh-CN.md">简体中文</a>

## ✨ Features
- 🎨 **Beautiful Components** - Beautifully designed components come right out of the box for rapid prototyping.
- 🔑 **TypeScript** - Rosi is written using TSX
- ⚡ Support for on-demand import.


## 🔨 Install

#### pnpm
```sh
pnpm install rosi-ui
```

#### yarn

```sh
yarn add rosi-ui
```

## 🔧 Usage

Then import `RosiUi` in the `main.ts` file:

```ts
import { createApp } from 'vue'
import App from './App.vue'
// Import Vue RosiUi component and style
import RosiUi from 'rosi-ui'
import 'rosi-ui/style.css'
createApp(App).use(RosiUi).mount('#app')
```

Then you can use the vue rosiui component(such as `<r-button>`) in the `App.vue` file:

```vue
<template>
  <r-button>Hi Rosi</r-button>
</template>
```

## 🧩 Structure

```
in the building
```

## 🎯 Supported Browsers

Since Vue 3 no longer supports IE11, Rosi no longer supports Internet Explorer

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge ≥ 79                                                    | Firefox ≥ 78                                                 | Chrome ≥ 64                                                  | Safari ≥ 12                                                  |
