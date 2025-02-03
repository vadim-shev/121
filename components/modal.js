

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
    props: {
        isOpen: Boolean
    },
    template: `
        <div v-if="isModalOpened" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>
        <div class="modal-body">
          <slot name="content"> default content </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>
              asd
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
    `,
    data() {
        return {
        }
    },
    methods: {
        openModal() {
    this.isModalOpened = true;
  },
  closeModal() {
    this.isModalOpened = false;
  }
    }
}
