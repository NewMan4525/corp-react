export function animate({
	timing,
	draw,
	duration
}) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;
		let progress = timing(timeFraction);
		draw(progress);
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

export function throttle(callee, timeout) {
	let timer = null;
	return function perfom(...args) {
		if (timer) return;
		timer = setTimeout(() => {
			callee(...args);
			clearTimeout(timer);
			timer = null;
		}, timeout);
	}
}

export function elCreater(parentEl, newElTag, addMode, ...newElSelector) {
	let el = document.createElement(newElTag);

	function addSelector(selector) {
		switch (selector[0]) {
			case '.':
				el.classList.add(selector.slice(1));
				break;
			case '#':
				el.id = selector.slice(1);
				break;
			default:
				el.classList.add(selector);
				break;
		};
	}

	if (newElSelector !== undefined) {
		newElSelector.forEach((selector) => {
			addSelector(selector)
		});
	}
	if (parentEl !== undefined && parentEl !== null) {
		switch (addMode) {
			case 'prepend':
				parentEl.prepend(el)
				break;
			case 'append':
				parentEl.append(el)
				break;
			default:
				parentEl.append(el)
				break;
		}
	}
	return el;
}

export function checkValue(varName, object = null, time = 150, func = null, ...args) {
	//varName need typeOf string!!!

	function reCheckObjVar() {
		if (object[varName.slice(varName.indexOf('.', 0) + 1)] == null) {
			setTimeout(() => {
				reCheckObjVar()
			}, time)
		} else {
			if (func !== null) {
				func(args);
			}
		}
	}

	function reCheck() {
		if (varName == null) {
			setTimeout(() => {
				reCheck()
			}, time)
		} else {
			if (func !== null) {
				func(args);
			}
		}
	}

	if (object == null) {
		reCheck()
	} else {
		reCheckObjVar()

	}
}

export function textAnimater(textEl, text, align) {

	let animTime = 150;
	let animInterval = 50;
	let animDuration = 300;
	let words = []
	let strings = {};
	let queueAnimate = [];

	function startStylesElem(elem, fontSize) {
		elem.style.visibility = 'hidden';
		elem.style.opacity = '0';
		if (elem.textContent === ' ') {
			elem.style.width = fontSize / 3 + 'px';
		}

		if (align === 'left') {
			elem.style.transform =
				`translate(-${textEl.parentElement.offsetWidth}px,0)`;
		} else {
			elem.style.transform =
				`translate(${textEl.parentElement.offsetWidth}px,0)`;
		}

	}

	function wordCalculator() {
		let spaces = [];

		function calculate(startPos, endPos) {
			let word = elCreater(textEl, 'div', 'append', 'word')
			word.style.display = 'inline-block';
			words.push(word)
			for (let index = startPos; index < endPos; index++) {
				let litera = elCreater(word, 'span', 'append', 'litera')
				litera.textContent = text[index];
				litera.style.display = 'inline-block';
				let fontSize = word.offsetHeight
				startStylesElem(litera, fontSize);
			}


		}

		function spacesCalc(params) {
			text.split('').forEach((element, index) => {
				if (element === ' ') {
					spaces.push(index + 1)
				}
			});
		}

		function render(params) {
			calculate(0, spaces[0]);
			for (let index = 0; index < spaces.length; index++) {
				calculate(spaces[index], spaces[index + 1]);
			}
			calculate(spaces[spaces.length - 1], text.length);
		}

		spacesCalc();
		render()
	}

	function stringCalculator() {
		let offsetTopElems = [];

		function offsetTopsCalc() {
			words.forEach(element => {
				if (element.textContent !== '') {
					if (offsetTopElems.indexOf(element.offsetTop, 0) === -1) {
						offsetTopElems.push(element.offsetTop)
					}
				}
			});
		}

		function formingStrings() {
			offsetTopElems.forEach((arrElement, index) => {
				let string = []
				words.forEach(element => {
					if (element.offsetTop === arrElement) {
						string.push(element);
					}
				});
				strings[index] = string;
			});
		}

		offsetTopsCalc()
		formingStrings()
	}

	function literAnimate(elem) {

		setTimeout(() => {
			animate({
				duration: animDuration,
				timing(timeFraction) {
					function circ(timeFraction) {
						return 1 - Math.sin(Math.acos(timeFraction));
					}
					return 1 - circ(1 - timeFraction);
				},
				draw(progress) {
					if (align === 'left') {
						elem.style.transform =
							`translate(-${textEl.parentElement.offsetWidth - textEl.parentElement.offsetWidth * progress}px,0)`;
					} else {
						elem.style.transform =
							`translate(${textEl.parentElement.offsetWidth-textEl.parentElement.offsetWidth*progress}px,0)`;
					}
					elem.style.visibility = 'visible';
					elem.style.opacity = progress;
				}
			});
		}, animTime);
		animTime += animInterval;

	}

	function animateRender() {
		let elems = [];

		for (const key in strings) {
			strings[key].forEach(element => {
				element.childNodes.forEach(element => {
					if (!queueAnimate.includes(element.offsetLeft)) {
						queueAnimate.push(element.offsetLeft)
					}
					elems.push(element)
				});
			});
		}

		function compareNumeric(a, b) {
			if (a > b) return 1;
			if (a === b) return 0;
			if (a < b) return -1;
		}

		function execute(params) {
			queueAnimate.sort(compareNumeric);

			if (align === 'left') {
				queueAnimate.reverse()
			}

			queueAnimate.forEach(arrElement => {

				elems.forEach(element => {
					if (element.offsetLeft === arrElement) {
						literAnimate(element)
					}
				});
			});
		}

		execute();
	}

	wordCalculator();
	stringCalculator()
	animateRender()

}

export function containerWidth(container) {
	if (typeof container == 'object') container = undefined
	let conWidth;

	const containers = {
		xs: '100%',
		sm: '540px',
		md: '720px',
		lg: '960px',
		xl: '1140px',
		fluid: '100%',
	}

	const breakPoints = {
		xs: 575.98,
		sm: 575.98,
		md: 767.98,
		lg: 991.98,
		xl: 1199.98,
		xxl: 1399.98,
	}

	switch (true) {
		case window.innerWidth <= breakPoints.xs &&
		window.innerWidth < breakPoints.sm:
			container ?
				container.style.maxWidth = containers.xs :
				conWidth = containers.xs;
			break;
		case window.innerWidth >= breakPoints.sm &&
		window.innerWidth < breakPoints.md:
			container ?
				container.style.maxWidth = containers.sm :
				conWidth = containers.sm;

			break;
		case window.innerWidth >= breakPoints.md &&
		window.innerWidth < breakPoints.lg:
			container ?
				container.style.maxWidth = containers.md :
				conWidth = containers.md;

			break;
		case window.innerWidth >= breakPoints.lg &&
		window.innerWidth < breakPoints.xl:
			container ?
				container.style.maxWidth = containers.lg :
				conWidth = containers.lg;

			break;
		case window.innerWidth >= breakPoints.xl:
			container ?
				container.style.maxWidth = containers.xl :
				conWidth = containers.xl;

			break;
		default:
			break;
	}
	return conWidth;
}

export function debounce(f, ms) {
	let isCooldown = false;
	return function () {
		if (isCooldown) return;
		f.apply(this, arguments);
		isCooldown = true;
		setTimeout(() => isCooldown = false, ms);
	};
}

export function spy(func) {
	function wrapper(...args) {
		// мы используем ...args вместо arguments для хранения "реального" массива в wrapper.
		wrapper.calls.push(args);
		return func.apply(this, args);
	}
	wrapper.calls = [];
	return wrapper
}

export function delay(f, ms) {
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}