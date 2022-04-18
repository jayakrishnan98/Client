import React from 'react'
import './ImageSlider.css'
import image1 from './img/1.png'
import image2 from './img/2.png'
import image3 from './img/3.png'


function ImageSlider() {
    return (
        <div id="slider-wrapper">
		<div id="dots">

		</div>

		<div id="image-slider">
			<ul>
			<li class="active-img"><img src={image1} alt="" /></li><li><img src={image2} alt="" /></li><li><img src={image3} alt="" /></li>
			{/* <li><img src="http://www.derekhilldesign.com/projects/slider-header/images/logo.jpg" alt="" /></li> */}
			</ul>
			
		</div>

	</div>
    )
}

export default ImageSlider
