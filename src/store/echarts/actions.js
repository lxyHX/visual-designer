/**
 * Created by lenovo on 2017/5/18.
 */
import { debounceExec } from '@/utils'

export default{
  saveToServer({commit}, payload){
    debounceExec(commit('submitOptions', payload), 500)
  },
  updateCharts({commit, getters, state},payload){
    commit('updateRawData', payload);
    let option = getters.getOptionsFromRaw
    commit('updateOption', option);
    console.log('更新charts：',state.chartComponent)
    if (state.chartComponent)
      state.chartComponent.updateChart(state.option)
  }

}
