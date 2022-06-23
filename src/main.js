// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.component('test-slot', {
  // 插槽允许有默认内容
  template:
      `
        <div>
        <strong>Error!</strong>
        <slot></slot>
        </div>
      `,
  data: function () {
    return {
      name: 'perry'
    }
  }
})
//    具名插槽
Vue.component('slot-name', {
  template:
      `<div>
                      <header>
                            <slot name="header"></slot>
                      </header>
                     <main>
                        <slot ></slot>
                     </main>
                     <footer>
                        <slot name="footer"></slot>
                     </footer>

                </div>
               `
})

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
          <slot :data="todo">{{ todo.text }}</slot>
        </li>
        </ul>
      `
})
