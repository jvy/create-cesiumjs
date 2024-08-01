<script setup>
import { ref ,onMounted} from 'vue'
// 引入cesium
import * as Cesium from 'cesium'
// onMounted 函数中调用
onMounted(()=>{
  // Cesium Token
  Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDRkMGQ3ZC01ZGQzLTRjZmItYWU2My05ZmMzMGFjYzk0ZjYiLCJpZCI6MTUxMjEsImlhdCI6MTYxMTU2MDg5NX0.-b4yFj_j6lHpM4d_BzqPzMeu-tVDhFi72vERYm8RQ2s"
      /* eslint no-new: */
      var viewer = new Cesium.Viewer('cesiumContainer', {
        animation: true, // 动画小组件
        baseLayerPicker: true, // 底图组件，选择三维数字地球的底图（imagery and terrain）。
        fullscreenButton: false, // 全屏组件
        vrButton: true, // VR模式
        geocoder: true, // 地理编码（搜索）组件
        homeButton: true, // 首页，点击之后将视图跳转到默认视角
        infoBox: true, // 信息框
        sceneModePicker: true, // 场景模式，切换2D、3D 和 Columbus View (CV) 模式。
        selectionIndicator: true, // 是否显示选取指示器组件
        timeline: true, // 时间轴
        navigationHelpButton: true, // 帮助提示，如何操作数字地球。
        // 如果最初应该看到导航说明，则为true；如果直到用户明确单击该按钮，则该提示不显示，否则为false。
        navigationInstructionsInitiallyVisible: true
      });
 
})
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
   <div id="cesiumContainer">
    
  </div>
</template>

<style scoped>
#cesiumContainer{
  width:100%;
  height:100%;
}
</style>