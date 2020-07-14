<template>

 <div id="app" style="padding: 100px;">
     <g-collapse :selected="selected">
       <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
       <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
       <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
     </g-collapse>
     
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
 import Collapse from '../../../src/collapse'
 import CollapseItem from '../../../src/collapse-item'
    export default {
        components: {
            'g-collapse':Collapse,
            'g-collapse-item':CollapseItem,
        },
          data () {
              
      return {
          selected: [1],
        content: `
          selected:'1',
          <g-collapse :selected="selected">
       <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
       <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
       <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
     </g-collapse>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
        
    
</script>

<style lang="scss" scoped>

</style>