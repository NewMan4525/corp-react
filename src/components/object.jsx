
import set from "../core/set.js"
import PageImg from "./pageImg.jsx"
import PageText from "./pageText.jsx"
import { useCommonCon } from "../core/commonContext.jsx";
import { useRef, useMemo, useEffect } from "react";
import { animate } from "../core/helpers.js";

export default function Object({ time, timeout }) {
	const { pos } = useCommonCon()
	const objRef = useRef(null)

	const objectCss = {
		position: 'absolute',
		backgroundColor: 'red',

		minWidth: '100px',
		minHeight: '100px',
		top: 0,
		right: '-20%',
		zIndex: 1,
		display: 'none',
	}


	function animater2(el) {
		const animFunc = [
			{ display: 'block' },
			{
				right: '-20%',
				top: 0,
			},
			{
				right: ' 120%',
				top: ' 25%',


			},
		]
		const animTiming = {
			duration: time,
			iterations: 1,
		}
		if (objRef.current) {
			setTimeout(() => {
				el.animate(animFunc, animTiming)
			}, timeout)
		}

	}




	const body = document.querySelector('body')
	body.style.overflow = 'hidden'
	if (objRef.current) {
		body.addEventListener('click', (e) => {
			animater2(objRef.current);
			console.log('klicks');
		}
		)
	}

	return (
		<>
			<div
				ref={objRef}
				className="object"
				style={objectCss}>
				object
			</div>

		</>
	)
}