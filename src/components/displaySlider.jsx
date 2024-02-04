import { createContext, useRef, useState, useContext } from "react";

import { containerWidth, debounce } from "../core/helpers.js";
import set from '../core/set.js'
import Slide from './slide'
import Arrow from "./arrow.jsx";
import { useCommonCon } from "../core/commonContext.jsx";


export default function DisplaySlider({ ChangeCurSlide }) {
	const { currentSlide } = useCommonCon()
	const { move } = useCommonCon()
	const { placesForSlides } = useCommonCon()
	const { viewGroup } = useCommonCon()
	const { pos } = useCommonCon()


	const sliderRef = useRef(null)




	const calcHeight = () => {
		let calc = (Number(containerWidth().replace('px', '')) / 1.777) + 'px';
		if (calc === 'NaNpx') {
			calc = '28%';
		}
		return calc
	}

	const sliderCss = {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		height: calcHeight(),
		overflow: 'hidden',

	}

	class WrapCss {
		constructor() {
			this.position = 'absolute';
			this.width = '8.44%';
			this.height = '15% ';
			this.zIndex = '2';
		}
	}

	const arrowWrapLCss = new WrapCss();
	arrowWrapLCss.left = '0';

	const arrowWrapRCss = new WrapCss();
	arrowWrapRCss.right = '0';

	const eventHandler = () => {
		if (sliderRef.current !== null) sliderRef.current.style.height = calcHeight()
	}

	const slideCss = {
		left: ['-25%', '6.25%', '37.5%', '68.75%', '100%'],
	}

	window.addEventListener('resize', eventHandler)

	// function autoSlide(params) {

	// 	setInterval(Right, set.animTime * 5)
	// }
	// if (move === null) {
	// 	// autoSlide()
	// }

	return (
		<div ref={sliderRef} className="slider" style={sliderCss}>
			<div className="arrow-wrap-l" style={arrowWrapLCss}>
				<Arrow
					typeArrow="m"
					align="l"
				/>
			</div>

			{placesForSlides.map((_, i) => {
				return <Slide
					className="slide"
					left={slideCss.left[i]}
					slide={viewGroup[i]}
					index={i}
					key={i}
				/>
			})}

			<div className="arrow-wrap-r" style={arrowWrapRCss}>
				<Arrow
					typeArrow="m"
					align="r"
				/>
			</div>
		</div>
	)
}