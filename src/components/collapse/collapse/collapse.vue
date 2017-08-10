<script>
import template from './collapse.html' // 页面html

import collapseTransition from 'utils/transitions/collapse-transition.js'
import Emitter from 'utils/mixins/emitter.js'

export default {
  name: 'collapse',
  template: template,
  mixins: [ Emitter ],
  components: { collapseTransition },

  data () {
    return {
    }
  },

  props: {
    /** 唯一标志符 **/
    name: {
      type: [String, Number],
      default () {
        return this._uid
      }
    }
  },

  computed: {
    /** 表示隐藏部分是否显示 **/
    isActive () {
      return this.$parent.activeNames.includes(this.name)
    }
  },

  methods: {
    handleHeaderClick () {
      this.dispatch('collapseGroup', 'header-click', this)
    }
  }
}
</script>

<style lang="scss">
  @import "src/styles/variables";
  @import "./collapse.scss";
</style>
