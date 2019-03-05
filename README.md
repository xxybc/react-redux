# 构建项目 Create React App (https://github.com/facebook/create-react-app)
cnpm install -g create-react-app
create-react-app my-app
cd my-app
cnpm start

# 运行项目 npm start or yarn start

# 部署 `npm run build`

## 安装react-router
https://react-guide.github.io/react-router-cn/index.html
https://reacttraining.com/react-router/web/example/basic

安装
==npm安装
npm install --save react-router
npm install --save react-router-dom

==yarn安装
yarn add react-router
yarn add react-router-dom

==也可以使用React-Router CDN库
<script src="https://unpkg.com/react-router/umd/ReactRouter.min.js"></script>

## 安装及使用 antd
npm install antd --save  或  yarn add antd
示例#
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
引入样式：
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

## 安装react-redux
npm install --save react-redux
yarn add react-redux

## 安装redux
cnpm install --save redux


## 参考
https://github.com/luozhihao/react-antd-demo/tree/master




