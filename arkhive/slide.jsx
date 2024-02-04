import set from "../set.js"

import { useContext, useRef } from "react"
import { SliderContext } from "./displaySlider.jsx"
import { animate } from "../helpers.js"



export default function Slide({ pos, slide, left, index }) {
	const move = useContext(SliderContext)
	const slideRef = useRef(null)
	const slideCss = {
		position: 'absolute',
		width: '25%',
		height: '25%',
		margin: '0 1px',
		left: left,
		overflow: 'hidden',
		willChange: 'transform',
		// opacity: 0,

	}
	if (index === 2) {
		slideCss.transform = 'scale(4)';
		slideCss.zIndex = 1;
		// slideCss.opacity = 1;

	}
	if (index !== 2) {
		// slideCss.opacity = 0;
	}


	const imgCss = {
		position: 'relative',
		display: 'block',
		margin: '0 auto',
		position: 'relative',
		maxWidth: '100%',
		maxHeight: '100%',
	}

	function upScaleSlide() {
		animate({
			duration: set.animTime,
			timing(timeFraction) {
				function circ(timeFraction) {
					return 1 - Math.sin(Math.acos(timeFraction));
				}
				return 1 - circ(1 - timeFraction);
			},
			draw(progress) {
				slideRef.current.style.transform = `scale(${progress * 4})`;
			}
		});
	}

	function downScaleSlide() {
		animate({
			duration: set.animTime,
			timing(timeFraction) {
				function circ(timeFraction) {
					return 1 - Math.sin(Math.acos(timeFraction));
				}
				return 1 - circ(1 - timeFraction);
			},
			draw(progress) {
				if (move === 'left') slideRef.current.style.transform = `translate(${progress * 125.5}%,0)scale(${4 - progress * 3})`;
				if (move === 'right') slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)scale(${4 - progress * 3})`;
				if (move === null) slideRef.current.style.transform = `translate(0, 0)scale(${4 - progress * 3})`;
			}
		});
		// setTimeout(() => slideRef.current.style.transform = 'scale(1)', set.animTime)
	}

	function animater() {
		animate({
			duration: set.animTime,
			timing(timeFraction) {
				function circ(timeFraction) {
					return 1 - Math.sin(Math.acos(timeFraction));
				}
				return 1 - circ(1 - timeFraction);
			},
			draw(progress) {
				if (move === 'left') slideRef.current.style.transform = `translate(${progress * 125.5}%,0)`;
				if (move === 'right') slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)`;
				if (move === null) slideRef.current.style.transform = `translate(0, 0)`;
			}
		});
	}

	function opacityFunc() {
		animate({
			duration: set.animTime,
			timing(timeFraction) {
				function circ(timeFraction) {
					return 1 - Math.sin(Math.acos(timeFraction));
				}
				return 1 - circ(1 - timeFraction);
			},
			draw(progress) {
				if (move === 'right')
					switch (index) {
						// case 0:
						// 	slideRef.current.style.opacity = 0.5 - progress * 0.5;
						// 	break;
						// case 1:
						// 	slideRef.current.style.opacity = 0.5 - progress * 0.5;
						// 	break;
						case 2:
							slideRef.current.style.opacity = 1 - progress * 0.5;
							break;
						// case 3:
						// 	slideRef.current.style.opacity = 0.5 + progress * 0.5;
						// 	break;
						// case 4:
						// 	slideRef.current.style.opacity = 0 + progress * 0.5;
						// 	break;
						default:
							break;
					}
				if (move === 'left')
					switch (index) {
						// case 0:
						// 	slideRef.current.style.opacity = 0 + progress * 0.5;
						// 	break;
						// case 1:
						// 	slideRef.current.style.opacity = 0.5 + progress * 0.5;
						// 	break;
						case 2:
							slideRef.current.style.opacity = 1 - progress * 0.5;
							break;
						// case 3:
						// 	slideRef.current.style.opacity = 0.5 - progress * 0.5;
						// 	break;
						// case 4:
						// 	slideRef.current.style.opacity = 0 - progress * 0.5;
						// 	break;
						default:
							break;
					}
				// if (move === null)
				// 	switch (index) {
				// 		// case 0:
				// 		// 	slideRef.current.style.opacity = 0 + progress * 0.5;
				// 		// 	break;
				// 		// case 1:
				// 		// 	slideRef.current.style.opacity = 0.5 + progress * 0.5;
				// 		// 	break;
				// 		case 2:
				// 			slideRef.current.style.opacity = 0.5 + progress * 0.5;
				// 			break;
				// 		case 3:
				// 			slideRef.current.style.opacity = 0 + progress * 0.5;
				// 			break;
				// 		// case 4:
				// 		// 	slideRef.current.style.opacity = 0 - progress * 0.5;
				// 		// 	break;
				// 		default:
				// 			break;
				// 	}




				// if (index === 1 || index === 3) slideRef.current.style.opacity = progress * 0.5;
				// if (index === 0 || index === 5) slideRef.current.style.opacity = progress;
			}
		});
	}

	if (slideRef.current) {
		animater();

	}

	if (slideRef.current && index === 2) {
		if (move === null) {
			setTimeout(upScaleSlide, set.animTime)
		} else {
			downScaleSlide()

		}
	}
	// if (slideRef.current) opacityFunc();



	return (
		<div ref={slideRef} style={slideCss}>
			<img style={imgCss} src={set.index[pos].modules[slide].mediaSrc} alt="" />
		</div>

	)
}