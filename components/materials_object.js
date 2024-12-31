// export default {
 
//   computed: {
//     // materialClass() {
//     //   return this.class || ''; // Use class prop or fallback to an empty string
//     // },
//     // MaterialsList() {
//     //   // Generate a list of materials (currently unused, but left in for context)
//     //   return [
//     //     {
//     //       materialClass: this.class,
//     //       materialTransform: `transform: scale(${this.materialScale}) rotateY(${this.materialRotateY}) rotateX(${this.materialRotateX}) translateZ(${this.materialTranslate});`
//     //     }
//     //   ];
//     // }
//   },
//   methods: {
//     // convertToArray(prop, symbol) {
//     //   return prop.split(symbol);
//     // }
//   },
//   mounted() {
//     console.log(this.materialScale, this.materialRotateY, this.materialRotateX, this.materialTranslate);
//   },
//   template: `
//   <div
//     v-for="(material, index) in MaterialsList"
//     :key="index"
//     class="materialClass"
//     :style=
//       transform: `scale(${material.materialScale}) rotateY(${material.materialRotateY}) rotateX(${material.materialRotateX}) translateZ(${material.materialTranslate})`
    
//     }"
//   >
//     <img class="materials_image" :src="src" />
//   </div>
//   `
// };
