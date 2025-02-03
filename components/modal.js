export default {
    props: {
        isModalOpened: Boolean
    },
    template: `
    <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header"> 
                    <label>asd</label>
                    <input type="" name="asd">
                                    <button class="btn_order" @click="toggleModal">Заказать sa</button>
                 </slot>
            </div>
            <div class="modal-body">
                <slot name="content"> default content </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <div> asd </div>
                </slot>
            </div>
        </div>
    </div>
    `,
    methods: {

       toggleModal() {
            // Emit an event to change the isModalOpen value in the parent
            this.$emit('update:isModalOpen', !this.isModalOpen);
        }
    }
}
