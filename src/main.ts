import { createApp } from "vue";
import App from "./App.vue";
//引入组件路由
import router from "./router";
//导入css
import './assets/styles/mytailwind.css';

const app = createApp(App);
app.directive("xx", {});
app.use(router); //使用路由
const vm = app.mount("#app");
