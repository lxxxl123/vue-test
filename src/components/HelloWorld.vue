<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>
    <component-v1 :style="{'font-size': this.fontSize + 'em'}" :msg1="'123'" v-on:enlarge-text="enlargeText"/>
    <test-vmodel v-model="inputVal"/>
    <date-range-picker />

  </div>
</template>

<script>
import ComponentV1 from './componentV1'
import testVmodel from './test-vmodel'
import DateRangePicker from './date-range-picker'
import Vue from 'vue'

Vue.use(DateRangePicker)

export default {
  name: 'HelloWorld',
  components: {DateRangePicker, ComponentV1 ,testVmodel },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fontSize: 0.5,
      inputVal : 'abcdefg'
    }
  },
  methods: {
    enlargeText(event) {
      console.log(this.fontSize)
      this.fontSize += event
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
