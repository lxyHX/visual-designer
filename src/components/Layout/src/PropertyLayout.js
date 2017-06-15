import {showProperty} from "../../InputCollector/InputCommon"

export default{
  functional: true,
  name:"PropertyLayout",
  render(h, {data,props,children}){
    console.log(data,props)
    return  ( <div class="property" v-show={showProperty(data.optionKey)}>
      <v-layout row wrap>
        <v-flex xs4 offset-xs1 class="label caption">
          {data.label}
        </v-flex>
        <v-flex xs7 class={props.className?props.className:""} >
          {children}
        </v-flex>
      </v-layout>
    </div> );
  },
}