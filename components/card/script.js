
export default {
	props: ['name', 'concept', 'pathTo', 'value', 'src', 'ID'],
	template: `
		<section class="produc " >
				
			<div class="produc-infoBlock">
				<h3 class="produc-name">{{ name }}</h3>
				<div style="width: 100%; display: flex; flex-direction: row; align-content: center; align-items: center;">	
					<p class="produc-article">{{ concept }}</p>
					<img :id="ID" :src="src" class="produc-image" alt="" />
				</div>
				<router-link class="produc-routerLink"  :to="pathTo" >{{ value }}</router-link>
			</div>
		</section>
			
	`
}
