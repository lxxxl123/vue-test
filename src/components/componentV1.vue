<template>
  <div>
    {{ msg1 }}
    <button v-on:click="$emit('enlarge-text',v1)">点击我</button>
  </div>
</template>


<script>
/* 测试抛出事件*/
export default {
  name: 'componentV1',
  props: {
    msg1: {
      type: String,
      default: () => "default"
    },
  },
  data () {
    return {
      v1 : 0.5
    }
  }
}
</script>