import { useEffect, useRef, createContext, useState } from "react";
import { containerWidth } from "../helpers"
import set from "../set";
import DisplayPage from "./displayPage";
import DisplaySlider from "./displaySlider";

export const BackgroundContext = createContext()


export default function Frame({ self, pos }) {
	const [currentSlide, useCurrentSlide] = useState(2)
	const contRef = useRef(null)
	const sectRef = useRef(null)
	const sectCss = {
		position: 'relative',
	}
	// console.log(currentSlide);
	const contCss = {
		position: 'relative',
		margin: '0 auto',
		maxWidth: containerWidth(),
		// backgroundColor: 'indigo',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
	}

	if (self === 'fragment') {
		sectCss.height = '100%';
	} else {
		sectCss.height = '100vh';
	}

	const eventHandler = () => {
		if (contRef.current !== null) {
			contRef.current.style.maxWidth = containerWidth()
		}
	}
	window.addEventListener('resize', eventHandler)
	function ChangeCurSlide(n) {
		useCurrentSlide(currentSlide => currentSlide = n)
	}

	// useEffect(() => {
	// 	if (sectRef.current) {
	// 		console.log(set.index[pos].modules[currentSlide].mediaSrc);
	// 		// sectRef.current.style.background = `no-repeat center/100% url(${set.index[pos].modules[currentSlide].mediaSrc})`;
	// 	}
	// }, [currentSlide])



	return (
		<BackgroundContext.Provider value={currentSlide}>
			<section ref={sectRef} id="section" className="section" style={sectCss} >
				<div ref={contRef} id="container" className="container" style={contCss} >
					{set.index[pos].type === 'display' ? <DisplayPage pos={pos} /> : null}
					{set.index[pos].type === 'slider' ? <DisplaySlider fch={ChangeCurSlide} pos={pos} /> : null}
				</div>
			</section >
		</BackgroundContext.Provider>
	)

}