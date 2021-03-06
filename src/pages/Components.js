import Vue from 'vue'
//第三方UI组件
import Vuetify from 'vuetify'
import { Slider, Input,Button } from 'element-ui'
import * as MuseCheckbox from 'muse-ui/src/checkbox'
import MuseDialog from 'muse-ui/src/dialog'

//自定义UI组件
import ColorPicker from '@/components/ColorPicker'
import ColorPickerList from '@/components/ColorPickerList'
import {VuexEcharts} from '@/components/ChartsPanel/'
import Brace from '@/components/Brace'
import CheckGroup from '@/components/CheckButton'
import DataTable from  '@/components/DataTable'
import { VerticalTab, VerticalTabPanel } from '@/components/VerticalTab'
import * as Charts from '@/components/ChartsPanel'
import * as PropertyGroup from '@/components/InputCollector'
import * as Layout from '@/components/Layout'
import * as EchartComponents from '@/views/Echarts/common'
import editDimension from '@/views/Echarts/editDimension.vue'
import * as ViewCommon from '@/views/common'

Vue.use(Vuetify)

/*
 * 组件注入
 * */
const uiComponent = {
  //第三方组件
  Slider, Input,Button,
  ...MuseCheckbox,MuseDialog,
  //自定义组件
  ColorPicker,ColorPickerList,VerticalTab, VerticalTabPanel, VuexEcharts,CheckGroup,Brace,DataTable,
  ...Charts,
  ...PropertyGroup,
  ...Layout,
  editDimension,
  ...ViewCommon,
  //ECharts属性组件
  ...EchartComponents
};

Object.keys(uiComponent).forEach(key=>{Vue.component(uiComponent[key].name,uiComponent[key])})

