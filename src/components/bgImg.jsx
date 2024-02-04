import { useContext, useEffect, useRef, useState } from "react";
import set from "../set"
import { useCommonCon } from "../context/commonContext";

export default function BgImg({ pos }) {
	const { currentSlide } = useCommonCon()
	const imgRef = useRef(null)
	const [iterate, useIterate] = useState(0)
	// let bgPath = set.index[pos].modules[currentSlide].bgPath;
	// let bgAlt = set.index[pos].modules[currentSlide].bgAlt;
	const imgWrapCss = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		// boxShadow: 'inset 0 0 100px 10px transparent',
		overflow: 'hidden',
		zIndex: 1,

	}
	const imgCss = {
		position: 'absolute',
		// display: 'block',
		width: '100%',
		top: '50%',
		transform: 'scale(1)translate(0,-50%)',
		transformOrigin: '50% 0%',

		opacity: 0,
	}

	function animater() {

		const animFunc = [
			{ opacity: 0 },
			{ opacity: 0 },
			{ transform: 'scale(1)translate(0,-50%)' },
			{ opacity: 0.4 },
			{ opacity: 0.4 },
			{ opacity: 0.4 },
			{ opacity: 0.4 },
			{ opacity: 0.4 },
			{ opacity: 0 },
			{ opacity: 0 },
			{ transform: 'scale(1.3)translate(0,-50%)' },
		]

		const animTiming = {
			duration: set.animTimeBg,
			iterations: 1,
		}

		if (imgRef.current) {
			imgRef.current.animate(animFunc, animTiming)
		}
	}


	useEffect(() => {
		animater();


	}, [currentSlide])
	return (
		<div className="wrap-bg-media" style={imgWrapCss}>
			{set.index[pos].modules[currentSlide].bgType === 'img' ?
				<img
					ref={imgRef}
					className="bg-img"
					src={set.index[pos].modules[currentSlide].bgPath}
					alt={set.index[pos].modules[currentSlide].bgAlt}
					style={imgCss} />
				: set.index[pos].modules[currentSlide].bgType === 'img' ?
					<video
						ref={imgRef}
						className="bg-video"
						src={set.index[pos].modules[currentSlide].bgPath}
						alt={set.index[pos].modules[currentSlide].bgAlt} /> : null

			}

		</div>
	)

}