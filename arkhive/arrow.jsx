import set from "../set";
import { animate, debounce } from "../helpers";

export default function Arrow({ typeArrow, align, fMov }) {

	const arrowBlockCss = {
		position: 'relative',
		display: 'block',
		zIndex: 0,
		overflow: 'hidden',
		width: '100%',
		height: '100%',
	}

	const arrowCss = {
		position: 'absolute',
		zIndex: 2,
		width: '100%',
		height: '100%',
		backgroundColor: set.colors.arrowsPrim,
	}

	const subArrowCss = {
		position: 'absolute',
		display: 'none',
		zIndex: 1,
		backgroundColor: set.colors.arrowsSecond,
		width: '100%',
		height: '100%',
	}

	switch (typeArrow) {
		case 'm':
			arrowBlockCss.clipPath = `polygon(
				50% 0%,100% 20%,100% 100%,50% 80%,0 100%,0 20%
			)`;
			arrowCss.cursor = 'pointer';
			arrowCss.clipPath = `polygon(
				50% 40%,100% 60%,100% 80%,50% 60%,0 80%,0 60%
			)`;
			subArrowCss.bottom = '20%';
			subArrowCss.clipPath = `polygon(
				50% 60%,100% 80%,100% 100%,50% 80%,0 100%,0 80%
				)`;
			break;
		case 'b':
			arrowBlockCss.cursor = 'pointer';
			arrowBlockCss.clipPath = `polygon(
				50% 0,100% 50%,100% 100%, 50% 50%,0 100%,0 50%
			)`;
			arrowCss.clipPath = `polygon(
				50% 0,100% 50%,100% 100%,50% 50%,0 100%,0 50%,
				50% 0,50% 10%,5% 55%,5% 85%,50% 40%,95% 85%,
				95% 55%,50% 10%
				)`;
			subArrowCss.top = '30%';
			subArrowCss.clipPath = `polygon(
				50% 10%,95% 55%,95% 85%,50% 40%,5% 85%, 5% 55%
				)`;
			break;
		default:
			break;
	}

	switch (align) {
		case 'd':
			arrowBlockCss.transform = 'rotate(180deg)';
			break;
		case 'l':
			arrowBlockCss.transform = 'rotate(-90deg)';
			break;
		case 'r':
			arrowBlockCss.transform = 'rotate(90deg)';
			break;
		default:
			break;
	}

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

	function ClickHandler(e) {
		animLogic(e);
		fMov();
	}

	return (
		<div
			className='arrow-block'
			style={arrowBlockCss}

			onClick={ClickHandler}
		>
			<div className='arrow' style={arrowCss} />
			<div className='subarrow' style={subArrowCss} />
		</div >
	)
}