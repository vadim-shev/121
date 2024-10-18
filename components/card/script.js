export default {
	props: ['title', 'specification',
			'name','price','imagePath', 'pathTo'],
	template: `
		<router-link  :to="{ path: pathTo }">
			<article class="product-miniature">
				<div class='pricing-title'>
					<h3>{{ title }}</h3>
				</div>	
				<div class="product-miniature-container">
					<div class="product-miniature-thumbnail">
						<div class="product-thumbnail">
							<a class="product-thumbnail-link">
								<div class="thumbnails-rollover">
									<img class="img-fluid" :src="imagePath" alt="">
								</div>	
							</a>
							<div></div>
						</div>
					</div>
					<div class="product-miniature-information">
						<div class="product-miniature-thumbnail">
							<h3 class="product-title">
								<a href="">{{ name }}</a>
							</h3>
							<div >
								<router-link :to="{ path: pathTo }" class="btn"> {{ price }} </router-link>
								
							</div>
						</div>
					</div>
				</div>
			</article>
		</router-link>
	`
}