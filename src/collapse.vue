<template>
    <div class="collapse">
        <slot></slot>

    </div>
</template>

<script>
    export default {
          name:"GuluCollapse",
          props: {
              single: {
                  type:Boolean,
                  default:false
              }
          },
          date () {
              return {
                  eventBus:new Vue()
              }
          },
          provide () {
              if(this.single) {
                  return {
                      eventBus:this.eventBus
                  }
              }
          }
    }
</script>

<style lang="scss" scoped>
     $grey:#ddd;
     $border-radius:4px;
      .collapse {
          border: 1px solid red;
          border-radius: $border-radius;
      }


</style>