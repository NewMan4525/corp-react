import set from "../core/set.js"

import { useContext, useRef } from "react"
import { animate } from "../core/helpers.js"
import { useCommonCon } from "../core/commonContext.jsx";

export default function Slide({ slide, left, index }) {
	const { move } = useCommonCon()
	const { pos } = useCommonCon()

	const slideRef = useRef(null)
	const slideCss = {
		position: 'absolute',
		width: '25%',
		height: '25%',
		left: left,
		overflow: 'hidden',
		backgroundColor: 'rgba(0,0,0,0.7)',
	}
	if (index === 2) {
		slideCss.transform = 'scale(4)';
		slideCss.zIndex = 1;
	}


	const imgCss = {
		position: 'relative',
		display: 'block',
		margin: '0 auto',
		maxWidth: '100%',
		maxHeight: '100%',
	}

	if (slideRef.current) {
		switch (move) {
			case 'left':
				switch (index) {
					case 0:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0 + progress * 0.5;
							}
						});
						break;
					case 1:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0.5 + progress * 0.5;

							}
						});
						break;
					case 2:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(${progress * 125.5}%,0)scale(${4 - progress * 3})`;
								slideRef.current.style.opacity = 1 - progress * 0.5;

							}
						});
						break;
					case 3:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0.5 - progress * 0.5;

							}
						});
						break;
					case 4:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(${progress * 125.5}%,0)`;
							}
						});
						break;
					default: break;
				}
				break;
			case 'right':
				switch (index) {
					case 0:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0 + progress * 0.5;

							}
						});
						break;
					case 1:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0.5 - progress * 0.5;

							}
						});
						break;
					case 2:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)scale(${4 - progress * 3})`;
								slideRef.current.style.opacity = 1 - progress * 0.5;
							}
						});
						break;
					case 3:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0.5 + progress * 0.5;

							}
						});
						break;
					case 4:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = `translate(-${progress * 125.5}%,0)`;
								slideRef.current.style.opacity = 0 + progress * 0.5;

							}
						});
						break;
					default:
						break;
				}
				break;
			case null:
				switch (index) {
					case 0:
					case 4:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = '';
								slideRef.current.style.opacity = 0;
							}
						});
						break;
					case 1:
					case 3:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = '';
								slideRef.current.style.opacity = 0.5;

							}
						});
						break;
					case 2:
						animate({
							duration: set.animTime,
							timing(timeFraction) {
								function circ(timeFraction) {
									return 1 - Math.sin(Math.acos(timeFraction));
								}
								return 1 - circ(1 - timeFraction);
							},
							draw(progress) {
								slideRef.current.style.transform = '';
								slideRef.current.style.opacity = 1;
								slideRef.current.style.transform = `scale(${1 + progress * 3})`;

							}
						});
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}

	return (
		<div className="slide" ref={slideRef} style={slideCss}>
			<img style={imgCss} src={set.index[pos].modules[slide].mediaSrc} alt="" />
		</div>
	)
}