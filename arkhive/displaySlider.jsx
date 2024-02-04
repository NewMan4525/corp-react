import { createContext, useRef, useState, useContext } from "react";
import { BackgroundContext } from "./frame.jsx";

import { containerWidth } from "../helpers.js";
import set from '../set'
import Slide from './slide'
import Arrow from "./arrow.jsx";

export const SliderContext = createContext()

export default function DisplaySlider({ pos, fch }) {
	const currentSlide = useContext(BackgroundContext)

	const placesForSlides = [0, 1, 2, 3, 4]

	const sliderRef = useRef(null)
	const [move, useMove] = useState(null)
	const [viewGroup, setViewGroup] = useState(placesForSlides)
	const calcHeight = () => {
		let calc = (Number(containerWidth().replace('px', '')) / 1.777) + 'px';
		if (calc === 'NaNpx') {
			calc = '28%';
		}
		return calc
	}

	const sliderCss = {
		// backgroundColor: 'grey',
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




	function DefaultMove() { useMove((move) => move = null) }

	function nextViewGroup() {
		let newGroup = viewGroup.map((c) => {
			if (c === set.index[pos].modules.length - 1) {
				c = -1
			}
			return c + 1;
		})
		setViewGroup(newGroup)
	}

	function prevViewGroup() {
		let newGroup = viewGroup.map((c) => {
			if (c < 1) {
				c = set.index[pos].modules.length
			}
			return c - 1;
		})
		setViewGroup(newGroup)
	}

	function Left() {
		useMove((move) => move = 'left');
		setTimeout(prevViewGroup, set.animTime);
		setTimeout(DefaultMove, set.animTime);

	}
	function Right() {
		useMove((move) => move = 'right');
		setTimeout(nextViewGroup, set.animTime);
		setTimeout(DefaultMove, set.animTime);

	}

	fch(viewGroup[2])

	return (
		<div ref={sliderRef} className="slider" style={sliderCss}>
			<SliderContext.Provider value={move}>
				<div className="arrow-wrap-l" style={arrowWrapLCss}>
					<Arrow
						typeArrow="m"
						align="l"
						fMov={Left}
					/>
				</div>
				{placesForSlides.map((item, i) => {
					return <Slide
						className="slide"
						left={slideCss.left[i]}
						pos={pos} slide={viewGroup[i]}
						index={i}
						key={i}
					/>
				})}

				<div className="arrow-wrap-r" style={arrowWrapRCss}>
					<Arrow
						typeArrow="m"
						align="r"
						fMov={Right}
					/>
				</div>
			</SliderContext.Provider>
		</div>
	)
}