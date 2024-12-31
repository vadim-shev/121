export default {
    props: ['speedValue', 'scaleValue', 'colorValue'],
    template: `
        <div id="background-wrap">
            <div v-for="(cloud, index) in cloudElements">
                <div :key="index" class="cloud-container" :class="cloud.speedClass">
                    <div class="cloud" :style="[cloud.scaleStyle, cloud.colorStyle]"></div>
                </div>
            </div>
        </div>
    `, 
    computed: {
        cloudElements() {
            return this.convertToArray(this.speedValue, ',').map(speed => ({
                speedClass: speed.trim(),
                scaleStyle: `transform: scale(${this.scaleValue}) rotateY(${this.scaleValue}) rotateX(${this.scaleValue}) translateZ(${this.scaleValue});`,
                colorStyle: `background: var(${this.colorValue});`
            }))
        }
    },
    methods: {
        convertToArray(prop, symbol) {
            return prop.split(symbol)
        }
    }
}