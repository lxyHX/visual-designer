<template>
  <div>
    <property-select label="多X轴时本系列使用哪个X轴"  :component-type="type" :series-index="index" option-key="seriesIndex"  :options="[{text:'轴A',value:0},{text:'轴B',value:1}]"></property-select>
    <property-select label="多Y轴时本系列使用哪个Y轴"  :component-type="type"  :series-index="index" option-key="yAxisIndex"  :options="[{text:'轴A',value:0},{text:'轴B',value:1}]"></property-select>
    <Group :tabs="[{label:'普通状态',name:'normal'},{label:'高亮状态',name:'emphasis'}]">
      <div  class="content" slot="normal">
        <property-color label="系列特定主色" :component-type="type" :series-index="index" option-key="itemStyle.normal.color"></property-color>
        <subheader text="线条特定样式设置"/>
        <property-color label="线条颜色" :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.color"></property-color>
        <property-number label="线条宽度" unit="px" :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.width" :min="0" :max="20" :step="1"></property-number>
        <!--更多选项开始-->
        <property-select label="线条类型（平滑曲线只支持实线）"  :component-type="type" :series-index="index" option-key="iconStyle.normal.borderType" :options="[{text:'实线',value:'solid'},{text:'虚线（dashed）',value:'dashed'},{text:'点状线（dotted）',value:'dotted'}]"></property-select>
        <property-color  label="光影颜色"  :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.shadowColor"></property-color>
        <property-number label="光影模糊度"  unit="px" :min="0" :max="20" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.shadowBlur" ></property-number>
        <property-number label="光影横向偏移"  unit="px" :min="-10" :max="500" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.shadowOffsetX" ></property-number>
        <property-number label="光影纵向偏移"  unit="px" :min="-100" :max="100" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.normal.lineStyle.shadowOffsetY" ></property-number>
        <!--更多选项结束-->
        <subheader text="区域特定样式设置"/>
        <property-select label="区域是否填充默认颜色"  :component-type="type" :series-index="index" option-key="itemStyle.normal.areaStyle.type"  :options="[{text:'填充',value:'default'},{text:'不填充',value:false}]"></property-select>
        <property-color  label="区域填充颜色自定义"  :component-type="type" :series-index="index" option-key="itemStyle.normal.areaStyle.color"></property-color>
        <subheader text="小标志边框属性"/>
        <property-number label="边框线宽"  unit="px" :component-type="type" :series-index="index" option-key="itemStyle.normal.borderWidth" :min="0" :max="20" :step="1"></property-number>
        <property-color label="边框颜色" :component-type="type" :series-index="index" option-key="itemStyle.normal.borderColor"></property-color>
        <subheader text="数据项标签"/>
        <property-select label="数据项标签是否显示"  :component-type="type" :series-index="index" option-key="itemStyle.normal.label.show"  :options="[{text:'是',value:true},{text:'否',value:false}]"></property-select>
        <!--更多选项开始-->
        <property-select label="数据项标签位置"  :component-type="type" :series-index="index" option-key="itemStyle.normal.label.position" :options="[{text:'上',value:'top'},{text:'下',value:'bottom'},{text:'左',value:'left'},{text:'右',value:'right'},{text:'内部',value:'inside'},{text:'内部下方',value:'insideBottom'},{text:'内部上方',value:'insideTop'},{text:'内部左方',value:'insideLeft'},{text:'内部右方',value:'insideRight'}]"></property-select>
        <property-select label="文本标签内容模板" :component-type="type" :series-index="index" option-key="itemStyle.normal.label.formatter"></property-select>
        <property-color label="文本颜色"   :component-type="type" :series-index="index" option-key="itemStyle.normal.label.textStyle.color"></property-color>
        <property-number label="字体大小"  :component-type="type" :series-index="index" option-key="itemStyle.normal.label.textStyle.fontSize" unit="px"></property-number>
        <property-select label="字体样式"  :component-type="type" :series-index="index" option-key="itemStyle.normal.label.textStyle.fontStyle"
                         :options="[{text:'普通',value:'normal'},{text:'斜体（italic）',value:'italic'},{text:'倾斜文字（oblique）',value:'oblique'}]"></property-select>
        <property-select label="字体粗细"  :component-type="type" :series-index="index" option-key="itemStyle.normal.label.textStyle.fontWeight"
                         :options="[{text:'普通',value:'normal'},{text:'加粗',value:'bold'},{text:'更粗',value:'bolder'},{text:'更细',value:'lighter'}]"></property-select>
        <!--更多选项结束-->
      </div>
      <div class="content" slot="emphasis">
        <property-color label="系列特定主色" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.color"></property-color>
        <subheader text="线条特定样式设置"/>
        <property-color label="线条颜色" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.color"></property-color>
        <property-number label="线条宽度" unit="px" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.width" :min="0" :max="20" :step="1"></property-number>
        <!--更多选项开始-->
        <property-select label="线条类型（平滑曲线只支持实线）"  :component-type="type" :series-index="index" option-key="iconStyle.emphasis.borderType" :options="[{text:'实线',value:'solid'},{text:'虚线（dashed）',value:'dashed'},{text:'点状线（dotted）',value:'dotted'}]"></property-select>
        <property-color  label="光影颜色"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.shadowColor"></property-color>
        <property-number label="光影模糊度"  unit="px" :min="0" :max="20" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.shadowBlur" ></property-number>
        <property-number label="光影横向偏移"  unit="px" :min="-10" :max="500" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.shadowOffsetX" ></property-number>
        <property-number label="光影纵向偏移"  unit="px" :min="-100" :max="100" :step="1" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.lineStyle.shadowOffsetY" ></property-number>
        <!--更多选项结束-->
        <subheader text="区域特定样式设置"/>
        <property-select label="区域是否填充默认颜色"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.areaStyle.type"  :options="[{text:'填充',value:'default'},{text:'不填充',value:false}]"></property-select>
        <property-color  label="区域填充颜色自定义"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.areaStyle.color"></property-color>
        <subheader text="小标志边框属性"/>
        <property-number label="边框线框"  unit="px" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.borderWidth" :min="0" :max="20" :step="1"></property-number>
        <property-color label="边框颜色" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.borderColor"></property-color>
        <subheader text="数据项标签"/>
        <property-select label="区域是否填充默认颜色"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.show"  :options="[{text:'是',value:true},{text:'否',value:false}]"></property-select>
        <!--更多选项开始-->
        <property-select label="数据项标签位置"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.position" :options="[{text:'上',value:'top'},{text:'下',value:'bottom'},{text:'左',value:'left'},{text:'右',value:'right'},{text:'内部',value:'inside'},{text:'内部下方',value:'insideBottom'},{text:'内部上方',value:'insideTop'},{text:'内部左方',value:'insideLeft'},{text:'内部右方',value:'insideRight'}]"></property-select>
        <property-text label="文本标签内容模板" :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.formatter"></property-text>
        <property-color label="文本颜色"   :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.textStyle.color"></property-color>
        <property-number label="字体大小"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.textStyle.fontSize" unit="px"></property-number>
        <property-select label="字体样式"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.textStyle.fontStyle"
                         :options="[{text:'普通',value:'normal'},{text:'斜体（italic）',value:'italic'},{text:'倾斜文字（oblique）',value:'oblique'}]"></property-select>
        <property-select label="字体粗细"  :component-type="type" :series-index="index" option-key="itemStyle.emphasis.label.textStyle.fontWeight"
                         :options="[{text:'普通',value:'normal'},{text:'加粗',value:'bold'},{text:'更粗',value:'bolder'},{text:'更细',value:'lighter'}]"></property-select>
        <!--更多选项结束-->
      </div>
    </Group>
    <property-text label="堆积命名（同名系列会被堆积）" :component-type="type" :series-index="index" option-key="stack"></property-text>
    <divider/>
    <property-select label="折线转为平滑曲线" :component-type="type" :series-index="index" option-key="smooth" :options="[{text:'是',value:true},{text:'否',value:false}]"></property-select>
    <divider/>
    <subheader text="小标志设置"/>
    <property-select label="数据项标签位置"  :component-type="type" :series-index="index" option-key="symbol" :options="[{text:'心形',value:'heart'},{text:'水滴',value:'droplet'},{text:'标注',value:'pin'},{text:'箭头',value:'arrow'},{text:'星形',value:'star'},{text:'菱形',value:'diamond'},{text:'圆形',value:'circle'},{text:'矩形',value:'rectangle'},{text:'三角形',value:'itriangle'},{text:'空心圆',value:'emptyCircle'},{text:'空心矩形',value:'emptyRectangle'},{text:'空心三角',value:'emptyTriangle'},{text:'空心菱形',value:'emptyDiamond'}]"></property-select>
    <property-number label="小标志大小"  :component-type="type" :series-index="index" option-key="symbolSize" unit="px" :min="0" :max="80" :step="1" ></property-number>
    <property-number label="小标志图形旋转角度"  :component-type="type" :series-index="index" option-key="symbolRotate" unit="°" :min="-180" :max="180" :step="1" ></property-number>
    <divider/>
    <subheader text="数据标注设置"/>
    <property-select label="显示数据标注" :component-type="type" :series-index="index" option-key="markPoint._show" :options="[{text:'是',value:true},{text:'否',value:false}]"></property-select>
    <divider/>
    <subheader text="标线设置"/>
    <property-select label="显示数据标注" :component-type="type" :series-index="index" option-key="markLine._show" :options="[{text:'是',value:true},{text:'否',value:false}]"></property-select>
  </div>
</template>
<script>
  export default {
    name:'Series-line',
    props:{
      index:Number
    },
    data(){return{type:'series-line'}},
    beforeCreate(){

    }
  }
</script>
