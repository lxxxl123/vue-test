<template>
  <div id="app">
    <!--使用作用域插槽，通过slot-scope实现-->
    <todo-list :todos="todos">
      <template #s2="slotProps">
        {{ slotProps.data.text }}
      </template>
      <template #s1="{data}">
        {{ data.t1 }}
      </template>
      <template #default="{data}">
        {{ data.isTrue }}
      </template>
    </todo-list>
  </div>
</template>
<script>
import Vue from 'vue'


//    作用域插槽
Vue.component('todo-list', {
  inheritAttrs: false,
  props: {
    todos: [Array, Object]
  },
  template:
      `
        <ul>
        <li v-for="todo in todos" :key="todo.id" style="display: block;">
          <slot :data="todo"></slot>
          <slot name="s1" :data="todo"></slot>
          <slot name="s2" :data="todo"></slot>
        </li>
        </ul>
      `
})

export default {
  name: 'slot',
  data () {
    return {
      name: '岔道口',
      todos: [
        { t1: 'abc', text: 'A', id: 1, isTrue: true },
        { t1: 'def', text: 'B', id: 2, isTrue: true },
        { t1: 'hjk', text: 'C', id: 3, isTrue: false },
        { t1: 'lmn', text: 'D', id: 4, isTrue: true }
      ]
    }
  }

}


</script>

<style>
li {
  list-style: none;
  display: inline-block;
  font-size: 25px;
}
</style>
