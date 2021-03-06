import { merge } from '@/utils'

export const edits = {
  EchartCommon(){
    return [{title:'基础',name:'Base',active:'EchartsBaseCommon','pages':[{title:'通用',name:'EchartsBaseCommon',component:'EchartsBaseCommon'},{title:'高级',name:'EchartsBaseAdvanced',component:'EchartsBaseAdvanced'}]},
             {title:'标题',name:'Title',active:'EchartsTitleContent','pages':[{title:'内容',name:'EchartsTitleContent',component:'EchartsTitleContent'},{title:'样式',name:'EchartsTitleStyle',component:'EchartsTitleStyle'}]},
             {title:'图例',name:'Legend',active:'EchartsLegendBasic','pages':[{title:'基础',name:'EchartsLegendBasic',component:'EchartsLegendBasic'},{title:'高级',name:'EchartsLegendOthers',component:'EchartsLegendOthers'}]},
             {title:'提示',name:'Tooltip',active:'EchartTooltipCommon','pages':[{title:'通用',name:'EchartTooltipCommon',component:'EchartTooltipCommon'}]},
             {title:'工具',name:'Toolbox',active:'EchartsToolboxBasic','pages':[{title:'基础',name:'EchartsToolboxBasic',component:'EchartsToolboxBasic'}]},
            ];
  },
  EchartBar(){
    let bar = [{title:'X轴',name:'XAxis',active:'EchartsXAxisBasic',
                            'pages':[{title:'基础',name:'EchartsXAxisBasic',component:'EchartsXAxisBasic'},
                                     {title:'轴线',name:'EchartsXAxisLine',component:'EchartsXAxisLine'},
                                     {title:'标签',name:'EchartsXAxisLable',component:'EchartsXAxisLable'},
                                     {title:'刻度',name:'EchartsXAxisTick',component:'EchartsXAxisTick'},
                                     {title:'隔线',name:'EchartsXAxisSplitLine',component:'EchartsXAxisSplitLine'},
                                     {title:'隔区',name:'EchartsXAxisSplitArea',component:'EchartsXAxisSplitLine'}
    ]},
      {title:'Y轴',name:'YAxis',active:'EchartsYAxisBasic',
        'pages':[{title:'基础',name:'EchartsYAxisBasic',component:'EchartsYAxisBasic'},
                 {title:'轴线',name:'EchartsYAxisLine',component:'EchartsYAxisLine'},
                 {title:'标签',name:'EchartsYAxisLable',component:'EchartsYAxisLable'},
                 {title:'刻度',name:'EchartsYAxisTick',component:'EchartsYAxisTick'},
                 {title:'隔线',name:'EchartsYAxisSplitLine',component:'EchartsYAxisSplitLine'},
                 {title:'隔区',name:'EchartsYAxisSplitArea',component:'EchartsYAxisSplitArea'}
        ]}
    ],
    seriesType=[{name:'bar',component:'Series-bar'},{name:'line',component:'Series-line'}];//配置组件可用的序列类型
    return this._Merge_(bar,seriesType);
  },

  _Merge_(edit,seriesType){
     let common = this.EchartCommon();
     return {active:'Base',seriesType,pages:[...common,...edit]};
  }
}
