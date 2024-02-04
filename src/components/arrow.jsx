import set from "../core/set";
import { animate, debounce } from "../core/helpers";
import { useMemo } from "react";
import { useCommonCon } from "../core/commonContext";

function cssDefine(typeArrow, align,) {

	const cssDefine = {
		arrowBlockCss: {
			position: 'relative',
			display: 'block',
			zIndex: 0,
			overflow: 'hidden',
			width: '100%',
			height: '100%',
		},

		arrowCss: {
			position: 'absolute',
			zIndex: 2,
			width: '100%',
			height: '100%',
			backgroundColor: set.colors.arrowsPrim,
		},

		subArrowCss: {
			position: 'absolute',
			display: 'none',
			zIndex: 1,
			backgroundColor: set.colors.arrowsSecond,
			width: '100%',
			height: '100%',
		},
	}

	switch (typeArrow) {
		case 'm':
			cssDefine.arrowBlockCss.clipPath = `polygon(
				50% 0%,100% 20%,100% 100%,50% 80%,0 100%,0 20%
			)`;
			cssDefine.arrowCss.cursor = 'pointer';
			cssDefine.arrowCss.clipPath = `polygon(
				50% 40%,100% 60%,100% 80%,50% 60%,0 80%,0 60%
			)`;
			cssDefine.subArrowCss.bottom = '20%';
			cssDefine.subArrowCss.clipPath = `polygon(
				50% 60%,100% 80%,100% 100%,50% 80%,0 100%,0 80%
				)`;
			break;
		case 'b':
			cssDefine.arrowBlockCss.cursor = 'pointer';
			cssDefine.arrowBlockCss.clipPath = `polygon(
				50% 0,100% 50%,100% 100%, 50% 50%,0 100%,0 50%
			)`;
			cssDefine.arrowCss.clipPath = `polygon(
				50% 0,100% 50%,100% 100%,50% 50%,0 100%,0 50%,
				50% 0,50% 10%,5% 55%,5% 85%,50% 40%,95% 85%,
				95% 55%,50% 10%
				)`;
			cssDefine.subArrowCss.top = '30%';
			cssDefine.subArrowCss.clipPath = `polygon(
				50% 10%,95% 55%,95% 85%,50% 40%,5% 85%, 5% 55%
				)`;
			break;
	}

	switch (align) {
		case 'd': cssDefine.arrowBlockCss.transform = 'rotate(180deg)'; break;
		case 'l': cssDefine.arrowBlockCss.transform = 'rotate(-90deg)'; break;
		case 'r': cssDefine.arrowBlockCss.transform = 'rotate(90deg)'; break;
	}
	// console.log('cssDefine');
	return cssDefine
}

export default function Arrow({ typeArrow, align }) {
	const { Left } = useCommonCon()
	const { Right } = useCommonCon()

	const elCss = useMemo(
		() => {
			return cssDefine(typeArrow, align)
		}, [typeArrow, align])

	function arrowAnimate(el) {
		el.style.display = 'block';
		animate({
			duration: set.animTime,
			timing(timeFraction) {

				return timeFraction;
			},
			draw(progress) {
				el.style.transform =
					`translate(0,-${progress * 60}%)`;
			}
		});

		setTimeout(() => {
			el.style.display = 'none';
		}, set.animTime)
	}

	function animLogic(e) {

		let el;
		if (e.target.childNodes.length === 0) {
			el = e.target.parentElement.childNodes[1]
		} else {
			el = e.target.childNodes[1]
		}

		const debAnim = debounce(arrowAnimate, set.animTime)
		debAnim(el)
	}

	function clickHandler(e) {
		animLogic(e);
		if (align === 'l') {
			Left()
		}
		if (align === 'r') {
			Right()
		}
	}

	const debounceClickHandler = debounce(clickHandler, set.animTime)

	return (
		<div
			className='arrow-block'
			style={elCss.arrowBlockCss}
			onClick={debounceClickHandler}
		>
			<div className='arrow' style={elCss.arrowCss} />
			<div className='subarrow' style={elCss.subArrowCss} />
		</div >
	)
}