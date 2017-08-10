<script>
import template from './collapseGroup.html' // 页面html

export default {
  name: 'collapseGroup',
  template: template,

  data () {
    return {
      activeNames: [].concat(this.value)
    }
  },

  props: {
    /** 是否使用手风琴模式(只会有一个collapse打开) **/
    accordion: {
      type: Boolean,
      default: false
    },
    /**
     * 表示当前活动的collapse
     * 当accordion为true,value应为String,Number类型
     * 当accordion为false,value应为Array类型
     */
    value: {
      type: [Array, String, Number],
      default () {
        return []
      }
    }
  },

  computed: {},

  watch: {
    value (value) {
      this.activeNames = [].concat(value)
    }
  },

  methods: {
    handleCollapseClick (item) {
      /** @event change **/
      this.$emit('change', item.name)
      if (this.accordion) {
        /** 手风琴模式 **/
        this.activeNames = this.activeNames.includes(item.name) ? [] : [ item.name ]
      } else {
        /** 互不影响模式 **/
        if (!this.activeNames.includes(item.name)) {
          this.activeNames.push(item.name)
        } else {
          this.activeNames = this.activeNames.filter(val => {
            return val !== item.name
          })
        }
      }
    }
  },

  created () {
    this.$on('header-click', this.handleCollapseClick)
  }
}
</script>
