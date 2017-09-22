<template>
  <div class="cls-picker__wrap">
    <div class="cls-picker__item" :style="{height: contentHeight + 'px'}">
      <div class="cls-picker__list" v-for="item in values"
        @click="choseItem(item)"
        :class="{
          'cls-picker__selected': item === currentValue
        }"
        :style="{height: itemHeight + 'px', 'line-height': itemHeight + 'px'}"
        >{{item}}</div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import draggable from './draggable'
  import translateUtil from './translate'

  export default {
    name: 'clsPickerItem',
    props: {
      values: {},
      itemHeight: {
        type: Number,
        default () {
          return 30
        }
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      defaultIndex: Number,
      multiple: Boolean
    },
    data () {
      return {
        animationFrameId: null,
        currentValue: ''
      }
    },
    computed: {
      contentHeight () {
        return this.visibleItemCount * this.itemHeight
      },
      offestHeight() {
        return Math.ceil(this.visibleItemCount / 2) * this.itemHeight;
      },
      dragRange () {
        var values = this.values;
        var visibleItemCount = this.visibleItemCount;
        var itemHeight = this.itemHeight;
        return [ -itemHeight * (values.length - Math.ceil(visibleItemCount / 2)), itemHeight * Math.floor(visibleItemCount / 2) ];
      }
    },
    methods: {
      translate2Value(translate) {
        const itemHeight = this.itemHeight;
        translate = Math.round(translate / itemHeight) * itemHeight;
        const index = -(translate - Math.floor(this.visibleItemCount / 2) * this.itemHeight) / this.itemHeight;
        return this.values[index];
      },
      value2Translate() {

      },
      doOnValueChange() {
        const value = this.currentValue;
        const index = this.values.indexOf(value);
        if (index > -1) {
          const translate = -(index - Math.floor(this.visibleItemCount / 2)) * this.itemHeight;
          this.$nextTick(() => {
          const el =  this.$el && this.$el.querySelector('.cls-picker__item');
          translateUtil.translateElement(el, null, translate);
          })
        }
      },
      doOnValuesChange() {

      },
      choseItem(item) {
        if (this.multiple) return;
        this.$emit('choseItem', item);
      },
      updateRotate(currentTranslate, pickerItems) {
        if (!pickerItems) pickerItems = this.$el.querySelectorAll('cls-picker__list');
        const value = this.translate2Value(currentTranslate);
        const index = this.values.indexOf('value');
        

      },
      preRotate(translate) {

      },
      initEvents () {
        const el = this.$el.querySelector('.cls-picker__item');
        let dragState = {}
        let velocityTranslate, prevTranslate, pickerItems
        draggable(el, {
          start: (event) => {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            dragState = {
              range: this.dragRange,
              start: new Date(),
              startLeft: event.pageX,
              startTop: event.pageY,
              startTranslateTop: translateUtil.getElementTranslate(el).top
            };
            pickerItems = el.querySelectorAll('.cls-picker__list');
          },
          drag: (event) => {
            this.dragging = true;
            dragState.left = event.pageX;
            dragState.top = event.pageY;
            var deltaY = dragState.top - dragState.startTop;
            var translate = dragState.startTranslateTop + deltaY;
            translateUtil.translateElement(el, null, translate);
            velocityTranslate = translate - prevTranslate || translate;
            prevTranslate = translate;
            // if (this.rotateEffect) {
              // this.updateRotate(prevTranslate, pickerItems);
            // }
          },
          end: () => {
            if (this.dragging) {
              this.dragging = false;
              var momentumRatio = 7;
              var currentTranslate = translateUtil.getElementTranslate(el).top;
              var duration = new Date() - dragState.start;
              var momentumTranslate;
              if (duration < 300) {
                momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
              }
              var dragRange = dragState.range;
              this.$nextTick(() => {
                var translate;
                var itemHeight = this.itemHeight;
                if (momentumTranslate) {
                  translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
                } else {
                  translate = Math.round(currentTranslate / itemHeight) * itemHeight;
                }
                translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
                translateUtil.translateElement(el, null, translate);
                this.currentValue = this.translate2Value(translate);
                // if (this.rotateEffect) {
                //   this.planUpdateRotate();
                // }
              });
            }
            dragState = {};
          }
        })
      }
    },
    watch: {
      values: {
        handler(val) {
          // 选项发生改变, 初始化默认选中的值, 并滚动到初始位置
          this.doOnValuesChange();
          this.currentValue = (val || [])[this.defaultIndex || 0];
        },
        immediate: true
      },
      currentValue: {
        // 选中的值发生改变, 触发响应的事件
        handler() {
          this.doOnValueChange();
          this.$emit('valueChange');
        },
        immediate: true
      }
    },
    mounted () {
      this.initEvents()
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";
  .cls-picker__wrap {
    position: relative;
  }

  .cls-picker__item {
    position: relative;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
    z-index: 3;
    color: $textColor;
  }

  .cls-picker__selected{
    color: $dark;
    font-size: 1.5rem;
  }


  .cls-picker__mask{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    margin:0 auto;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    z-index: 3;
    transform: translateZ(0);
    background-repeat: no-repeat;
  }
</style>