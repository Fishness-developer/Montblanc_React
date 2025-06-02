import React from 'react';

const Advertising = () => {
	return (
		<section className="section_02">
			<div className="section_02__banner container">
				<div className="section_02__banner container inner_left"><img
					src="images/banners/banner_spices.png"
					width="955"
					height="200"
					alt=""
				/>
					<div className="text padding_right_50">
						<p className="padding_right_50">Traditional spices</p>
						<p>20% discount</p>
					</div>
				</div>
				<div className="section_02__banner container inner_right"><img
					src="images/banners/banner_cheese.png"
					width="965"
					height="200"
					alt=""
				/>
					<div className="text padding_left_50">
						<p>Italian cheeses</p>
						<p className="padding_left_50">at competitive prices</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advertising;
