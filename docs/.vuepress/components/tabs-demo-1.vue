<template>
    <div style="padding-top:16px">
        <p>
      <strong>预览</strong>
    </p>
  <g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content1</g-tabs-pane>
    <g-tabs-pane name="2">content2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
<p>代码展示</p>
<pre>
    <code>{{content}}</code>
    </pre>
    </div>
</template>

<script>
 import Tabs from '../../../src/tabs'
 import TabsItem from '../../../src/tabs-item'
 import TabsHead from '../../../src/tabs-head'
 import TabsPane from '../../../src/tabs-pane'
 import TabsBody from '../../../src/tabs-body'
    export default {
         components: {
      'g-tabs': Tabs,
      'g-tabs-item':TabsItem,
      'g-tabs-body':TabsBody,
      'g-tabs-head':TabsHead,
      'g-tabs-pane':TabsPane
    },
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }
          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
    
</script>

<style lang="scss" scoped>
 
</style>