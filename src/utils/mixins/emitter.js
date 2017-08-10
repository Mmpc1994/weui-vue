/* 向下广播
 * 向名为componentName的子组件广播eventName事件，并传递参数params
-------------------------- */
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.name

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

/* 向上冒泡
 * 向名为componentName的父组件冒泡eventName事件，并传递参数params
-------------------------- */
function dispatch (componentName, eventName, params) {
  let parent = this.$parent || this.$root
  let name = parent.$options.name

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.name
    }
  }
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
