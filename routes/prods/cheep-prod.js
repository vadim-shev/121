import NavigationPart from './../../templates/staticParts/Navigation/script.js';
import scrollMixin from './../../mixins/scrollMixin.js';
import FooterPart from '../../templates/staticParts/Footer.js';

export default {
  mixins: [scrollMixin],
  components: { NavigationPart, FooterPart },
  template: `
    <div ref="scrollContainer" :key="currentPageKey" id="p">
      <header style="position: relative; height: auto;" class="menuItem" id="header">
        <navigation-part style="width: 100vw;" :newItem="currentSection"></navigation-part>
      </header>
      <main class="main-prod">
        <div class="prod_container menuItem" style="padding-top: 55px;" id="prod">
          <img :src="Imagee" />
          <div
                style="width: 100vw; height: 100px; 
    display:flex;
    flex-direction: column;
    justify-content: space-between; position: absolute; "
              > 
                 <router-link
                  class="tombstone-routerLink" 
                  :to="'/catalog/cheep/' + Math.abs(Number($route.params.id) - 1)"
                >
                  <img style="position: absolute; left: -20px; top: 100px; " class="routerLink_img" src="./assets/catalog/left-arrow.svg" />
                </router-link>
                <router-link
                  class="tombstone-routerLink" 
                  :to="'/catalog/cheep/' + Math.abs(Number($route.params.id) + 1)"
                  style=""
                >
                  <img style="position: absolute; right: -10px;  top: 5px;" class="routerLink_img"  src="./assets/catalog/right-arrow.svg" />
                </router-link> 
              </div> 
          <div class="prod_cover">
              <div class="prod_cover_info">
                  <b style="color: black; font-size: 18px; font-weight: 900; letter-spacing:  .7px;">{{ Name }}</b>
                  <br />
                  <span>
                      <b style="color: black; font-size: 18px; font-weight: 900; letter-spacing:  .7px;">{{ Price }}</b>
                  </span>
                  <br />
                  <span style="color: green;">
                      Есть в наличии
                  </span>
              </div>
              <div class="prod_cover_info">
                  <button @click="scrollAction('p')" >Купить</button>
              </div>
            
            <div class="prod_cover_container">
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Материал: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">Гранит</b>
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Номер: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">БЖ 002</b>
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Каталог: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">Вертикальные</b>
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Модель: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">Памятник из гранита</b>
                      <br />
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Цветник: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">80*40*10*5</b>
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Подставка: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">40*20*15</b>
                      <br />
                  </span>
                <span  style=" color: gray; font-size: 20px; position: relative; top: 40px; left: 20px;  font-weight: 900; letter-spacing:  .2rem;">
                      Стела: <b style="color: black; font-weight: 900; letter-spacing:  .7px;">60*40*5</b>
                      <br />
                      <br />
                  </span>
                  <span  style=" color: gray; font-size: 24px; position: relative; top: 40px; left: 20px; text-align: right; font-weight: 900; letter-spacing:  .2rem;">
                      Описание
                      <br />
                  </span>
                  <p style="color: black; font-size: 16px; position: relative; top: 50px; left: 20px; letter-spacing:  .1px; ">
                      Cтандартные надгробные стелы, тумбы и цветники, изготовленные по типовому образцу, поэтому на их производство расходуется сравнительно мало времени и трудозатрат они подойдут как для мужчин так и для женщин. Кроме того, они быстро и легко устанавливаются. Стоимость указана за комплект.
                    
                  </p>
                  <p style=" width: 90vw; ">
                      <hr style="margin: 60px 0px 0px 0px;" />
                    
                  </p>

                <div class="prod_buttom_seeAll ">
                    <router-link :to="'/catalog'" >Перейти в каталог</router-link>
                </div>
              
            </div>
          </div>
        </div>
      </main>
      <footer class="menuItem" id="contact">
        <footer-part></footer-part>
      </footer>
    </div>
  `,
  data() {
    return {
      currentSection: '',
      currentPageKey: 'prodIndex',
      Name: '',
      Imagee: '',
      Price: '',
      ID: '',
    };
  },
  methods: {
    async fetchAPI(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    },
   
  },
  mounted() {
   this.fetchProduct('./data/cheep.json', 'cheep')
  },
  watch: {
    '$route.params.id': function () {
      this.fetchProduct('./data/cheep.json', 'cheep')
    },
  },
};
