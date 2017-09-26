/* eslint-disable */
import Vue from 'vue';
import { merge } from './util';
import { default as PopupManager } from './popup-manager';

require('./popup.css');

let idSeed = 1;
const transitions = [];

const hookTransition = (transition) => {
  if (transitions.indexOf(transition) !== -1) return;

  const getVueInstance = (element) => {
    let instance = element.__vue__;
    if (!instance) {
      const textNode = element.previousSibling;
      if (textNode.__vue__) {
        instance = textNode.__vue__;
      }
    }
    return instance;
  };

  Vue.transition(transition, {
    afterEnter(el) {
      const instance = getVueInstance(el);

      if (instance) {
        instance.doAfterOpen && instance.doAfterOpen();
      }
    },
    afterLeave(el) {
      const instance = getVueInstance(el);

      if (instance) {
        instance.doAfterClose && instance.doAfterClose();
      }
    }
  });
};

const getDOM = function(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: ''
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    modalClass: {
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  created() {
    if (this.transition) {
      hookTransition(this.transition);
    }
  },

  mounted() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  beforeDestroy() {
    PopupManager.deregister(this._popupId);
    PopupManager.closeModal(this._popupId);
  },

  data() {
    return {
      bodyOverflow: null,
      rendered: false
    };
  },

  watch: {
    visible(val) {
      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          Vue.nextTick(() => {
            this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open(options) {
      if (!this.rendered) {
        this.rendered = true;
        this.visible = true;

        return;
      }

      const props = merge({}, this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      const openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(() => {
          this._openTimer = null;
          this.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },

    doOpen(props) {
      if (this.willOpen && !this.willOpen()) return;

      this._opening = true;
      this.visible = true;

      const dom = getDOM(this.$el);

      const modal = props.modal;

      const zIndex = props.zIndex;
      if (zIndex) {
        PopupManager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          PopupManager.closeModal(this._popupId);
          this._closing = false;
        }
        console.log(1111);
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), dom, props.modalClass);
        if (props.lockScroll) {
          if (!this.bodyOverflow) {
            this.bodyOverflow = document.body.style.overflow;
          }
          document.body.style.overflow = 'hidden';
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }

      if (modal) {
        dom.style.zIndex = PopupManager.nextZIndex();
      } else if (zIndex) {
        dom.style.zIndex = zIndex;
      }

      this.onOpen && this.onOpen();

      if (!this.transition) {
        this.doAfterOpen();
      }
    },

    doAfterOpen() {
      this._opening = false;
    },

    close() {
      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      const closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(() => {
          this._closeTimer = null;
          this.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },

    doClose() {
      // this.visible = false;
      this.$emit('close');
      this._closing = true;

      this.onClose && this.onClose();

      if (this.lockScroll) {
        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow;
        }
      }

      if (!this.transition) {
        this.doAfterClose();
      }
    },

    doAfterClose() {
      PopupManager.closeModal(this._popupId);
      this._closing = false;
    }
  }
};