<template>
  <div class="cls-picker__item" :style="{height: contentHeight + 'px'}">
    <div class="cls-picker__list" v-for="item in value"
      :style="{height: itemHeight + 'px', 'line-height': itemHeight + 'px'}"
      >{{item}}</div>
  </div>
</template>

<script>
  /* eslint-disable */
  import draggable from './draggable'
  import translateUtil from './translate'

  export default {
    name: 'clsPickerItem',
    props: {
      value: {},
      itemHeight: {
        type: Number,
        default () {
          return 30
        }
      },
      visibleItemCount: Number
    },
    data () {
      return {
        animationFrameId: null
      }
    },
    computed: {
      contentHeight () {
        return this.visibleItemCount * this.itemHeight
      },
      dragRange () {
        var values = this.value;
        var visibleItemCount = this.visibleItemCount;
        var itemHeight = this.itemHeight;
        return [ -itemHeight * (values.length - Math.ceil(visibleItemCount / 2)), itemHeight * Math.floor(visibleItemCount / 2) ];
      }
    },
    methods: {
      translate2Value(translate) {
        const itemHeight = this.itemHeight;
        translate = Math.round(translate / itemHeight) * itemHeight;
      },
      initEvents () {
        const el = this.$el
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
            //   this.updateRotate(prevTranslate, pickerItems);
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
    mounted () {
      this.initEvents()
    }
  }
</script>

<style lang="scss">
  .cls-picker__item {
    /* overflow: hidden; */
    position: relative;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
  }
</style>