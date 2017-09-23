/* eslint-disable*/
import Vue from 'vue'
import toast from './toast.vue'

const ToastConstructor = Vue.extend(toast)
let toastPool = []

function getInstance () {
   return new ToastConstructor({
    el: document.createElement('div')
  })
}

ToastConstructor.prototype.close = () => {
  document.body.removeChild();
}


function Toast (options = {}) {
  const duration = options.duration || 3000
  let instance = getInstance()

  document.body.appendChild(instance.$el)
  ~duration && (instance.timer = setTimeout(() => {
    instance.close()
  }, duration))
}

export default Toast
