<template>
  <div class="full-height chart-adjustment">
    <v-navigation-drawer persistent clipped v-model="drawer" class="side-drawer blue-grey darken-4" light
                         enable-resize-watcher>
      <vertical-tab-panel :isIndicator="false" isSelectColor v-model="activeTab">
        <vertical-tab title="基础" name="base">
          <vertical-tab-panel v-model="activeTab0" content-classes="vertical-tab__content__no-padding blue-grey darken-1">
            <vertical-tab title="标题12" name="0">
              <property-color label="背景颜色"  option-key="backgroundColor"></property-color>
          <!--    <property-text label="标题"   option-key="title.text"></property-text>
              <property-number label="标题大小"  unit="px" option-key="series[1].symbolSize"></property-number>-->
            </vertical-tab>
            <vertical-tab title="标题12" name="1">标题22</vertical-tab>
            <vertical-tab title="标题12" name="2">标题23</vertical-tab>
            <vertical-tab title="标题12" name="3">标题24</vertical-tab>
            <vertical-tab title="标题12" name="4">标题25</vertical-tab>
            <vertical-tab title="标题12" name="5">标题26</vertical-tab>
          </vertical-tab-panel>
        </vertical-tab>
        <vertical-tab title="标题23" name="1">标题2</vertical-tab>
        <vertical-tab title="标题23" name="2">标题3</vertical-tab>
        <vertical-tab title="标题23" name="3">标题4</vertical-tab>
        <vertical-tab title="标题23" name="4">标题5</vertical-tab>
      </vertical-tab-panel>
    </v-navigation-drawer>
    <view-header title="图标参数设置"></view-header>
    <main class="main-container blue-grey darken-1">
      <v-container fluid class="fluid-container">
        <v-card height="100%" class="card blue-grey lighter-1">
          <echarts-panel ></echarts-panel>
        </v-card>
      </v-container>
    </main>
  </div>
</template>
<script>
  import PropertyNumber from '../components/InputCollector/src/PropertyNumber'

  export default {

    components: {
      PropertyNumber},
    data () {
      return {
        menus:[{title:"数据源设定",icon:"settings_input_component",url:"/dataset_def"},{title:"图表设定",icon:"poll",url:"/"},{title:"原始图表新增",icon:"poll",url:"/brace"}],
        a_options:{
          "color.abc":"",
        },
        activeTab:"0",
        activeTab0:"0",
        height: 10,
        width: 20,
        width1: 20,
        width2: 20,
        drawer: true,
        drawer2: true,
        drawer3: true,
        drawer4: false,
        dataPanel: false,
        right: null,
        left: null,
        loader: null,
        loading: null,
        e3: null,
        "abc$colors": "",
        rgbaColors: "rgba(155,255,118,0.3)",
        textScript: `option={backgroundColor: '#404a59',tooltip:{trigger:"axis"},legend:{data:["最高气温","最低气温"]},toolbox:{feature:{mark:{show:true},dataView:{show:true,readOnly:true},magicType:{show:false,type:["line","bar"]},restore:{show:true},saveAsImage:{show:true}}},calculable:true,xAxis:[{type:"category",boundaryGap:false,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",name:"°C"}],series:[{name:"最高气温",type:"line",data:[11,11,15,13,12,13,10]},{name:"最低气温",type:"line",data:[1,-2,2,5,3,2,0]}],color:["rgb(209, 117, 117)","rgb(146, 78, 219)"],grid:{x:47,y:64,x2:124,y2:27}}`,
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        options: [
          {value: "1"},
          {text: "test2", value: "2"},
          {text: "test3", value: "3"},
          {text: "test4", value: "4"},
          {text: "test51", value: "51"},
          {text: "test232", value: "232"},
          {text: "test32", value: "32"},
          {text: "test42", value: "42"}],
        btnGroup: "32",
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
        root: 'textTable',
        hotSettings: {
          colHeaders: true,
          Data: [
            ['', 'Maserati', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi'],
            ['2009', 0, 2941, 4303, 354, 5814],
            ['2010', 3, 2905, 2867, 412, 5284],
            ['2011', 4, 2517, 4822, 552, 6127],
            ['2012', 2, 2422, 5399, 776, 4151]]
        }
      }

    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      }
    },
    methods: {
      ok(a){
        console.log(a)
      }
      ,
      click(a){
        console.log(a);
      },
      routeTo(url){
        console.log(this.$route)
      }

    }
  }
</script>
