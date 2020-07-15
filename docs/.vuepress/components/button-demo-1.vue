<template>
  <div>
    <g-button>按钮1</g-button>
    <g-button icon="settings">按钮2</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>

    <pre>
    <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
        <g-button>按钮1</g-button>
        <g-button icon="settings">按钮2</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>