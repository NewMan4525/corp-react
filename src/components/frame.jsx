import { useRef, createContext, useState } from "react";
import { containerWidth } from "../core/helpers"
import set from "../core/set";
import { useCommonCon } from "../core/commonContext";
import DisplayPage from "./displayPage";
import DisplaySlider from "./displaySlider";
import Landing from "./landing";
import Object from "./object";

export default function Frame({ self }) {
	const { pos } = useCommonCon();
	const contRef = useRef(null)
	const sectRef = useRef(null)

	const sectCss = {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		zIndex: 5,

	}

	if (self === 'fragment') {
		sectCss.height = '100%';
	} else {
		sectCss.height = '100vh';
	}
	const contCss = {
		position: 'relative',
		margin: '0 auto',
		maxWidth: containerWidth(),
		height: '100%',
		display: 'flex',
		alignItems: 'center',
	}

	// const mediaQuery = matchMedia('(prefers-reduced-motion: no-preference)')
	// if (mediaQuery.matches) {

	// };

	const eventHandler = () => {
		if (contRef.current !== null) {
			contRef.current.style.maxWidth = containerWidth()
		}
	}
	window.addEventListener('resize', eventHandler)


	return (
		<>
			<Object time={9000} timeout={0} />
			<section ref={sectRef} id="section" className="section" style={sectCss} >

				<div ref={contRef} id="container" className="container" style={contCss} >
					{set.index[pos].ready ? set.index[pos].type === 'landing' ? <Landing /> : null : <span>{pos}</span>}
					{set.index[pos].ready ? set.index[pos].type === 'display' ? <DisplayPage /> : null : <span>{pos}</span>}
					{set.index[pos].ready ? set.index[pos].type === 'slider' ? <DisplayPage /> : null : <span>{pos}</span>}
					{set.index[pos].ready ? set.index[pos].type === 'map' ? null : null : <span>{pos}</span>}
					{set.index[pos].ready ? set.index[pos].type === 'custom' ? null : null : <span>{pos}</span>}
					{set.index[pos].ready ? set.index[pos].type === 'adminpanel' ? null : null : <span>{pos}</span>}
				</div>
			</section >
		</>
	)

}