/**
 * Created by lenovo on 2017/5/18.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import echarts from "./echarts";
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{echarts}
});
