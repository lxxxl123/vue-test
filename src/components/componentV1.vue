<template>
  <div>
    {{ msg1 }}
  </div>
</template>


<script>
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
    }
  }
}
</script>