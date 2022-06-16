<template>
  <div>
    <input v-bind:value="value" v-on:input="value=$event.target.value"/>
  </div>
</template>


<script>
/* 测试抛出事件*/
export default {
  name: 'test-vmodel',
  props: {
    value: {
      type: String,
      default: () => "default"
    },
  },
  data () {
    return {
      val:''
    }
  }
}
</script>