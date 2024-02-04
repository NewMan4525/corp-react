import { useRef, useContext } from "react";
import { useCommonCon } from "../context/commonContext";


export default function Star({ queue }) {
	const { move } = useCommonCon()
	console.log(move);

	const starRef = useRef(null)
	const starColors = ['white', 'grey']
	const starTypes = ['+', 'x', '+x', 'b',]
	const starType =
		queue % 50 === 0 ?
			starTypes[Math.round(Math.random() * (starTypes.length - 1))] :
			'd'
	const starCss = {
		position: 'absolute',
		display: 'inline-block',
		top: `${Math.random() * 99}%`,
		left: `${Math.random() * 99}%`,
		width: `15px`,
		height: `15px`,
		backgroundColor: starColors[Math.round(Math.random() * (starColors.length - 1))],
	}

	switch (starType) {
		case '+':
			starCss.clipPath = `polygon(
				50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%,45% 55%, 0 50%, 45% 45%
			)`;
			break;
		case 'x':
			starCss.clipPath = `polygon(
				50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%,45% 55%, 0 50%, 45% 45%
			)`;
			starCss.transform = 'rotate(45deg)'

			break;

		case '+x':
			starCss.clipPath = `polygon(
				50% 0%, 55% 40%,70% 30%,60% 45%, 100% 50%, 60% 55%, 70% 70%, 55% 60%, 50% 100%, 45% 60%, 30% 70%, 40% 55%, 0 50%, 40% 45%, 30% 30%, 45% 40%
			)`;

			break;
		case 'b':
			starCss.width = `2px`
			starCss.height = `2px`
			break;
		case 'd':
			starCss.width = `1px`
			starCss.height = `1px`
			break;
		default: break;


	}

	const animOpacity = [
		{ opacity: 1 },
		{ opacity: 0.5 },
		{ opacity: 1 },
	]

	const timingOpacity = {
		duration: 2000,
		iterations: Infinity
	}
	if (starRef.current) {
		setTimeout(() => {
			starRef.current.animate(animOpacity, timingOpacity)
		}, Math.random() * 3000)
	}

	return (
		<div ref={starRef} className='star' style={starCss} />
	)
}