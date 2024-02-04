import {
	textRu
} from "../text/textRu";
import {
	textEn
} from "../text/textEn";
import {
	textTr
} from "../text/textTr";

export default (function set() {
	try {

		class ContentProp {
			constructor() {

				for (const key in arguments[0]) {
					[
						'type',
						'description',
						'align',
						'lineNumber',
						'bgType',
						'bgAlt',
						'bgPath',
						'textKey',
						'mediaSrc',
						'mediaAlt',
						'modules',
						'ready',
					]
					.forEach(element => {
						if (element === key) {
							this[key] = arguments[0][key]
						}
					});
				}
			}
		}

		class Set {
			constructor() {

				this.html = document.querySelector('html')

				this.defaultVal = null;
				this.lang = 'en';


				this.animTime = 500;

				this.animTimeBg = 50000;


				this.fontSizeH = 36;

				this.fontSize = 24;
				this.queryTime = 150;

				this.colors = {
					primary: 'coral',
					secondary: 'purple',

					hid: '#C7C7C7',
					bg: 'black',
					bgText: 'rgba(0,0,0,0.5)',

					primary_text: 'navy',
					headers: 'gold',

					arrowsPrim: 'teal',
					arrowsSecond: 'blue',

					test: 'red',

					random: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
				}

			}

			langOption() {
				switch (this.lang) {
					case 'ru':
						this.text = textRu;
						break;
					case 'en':
						this.text = textEn;
						break;
					case 'tr':
						this.text = textTr;
						break;
					default:
						this.text = null;
						break;
				}
				this.html.setAttribute('lang', this.lang)
			}

			buildSiteMap() {
				this.indexElems = {
					0: new ContentProp({
						type: 'preloader',
						description: 'it is landing',
						position: 0,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					0: new ContentProp({
						type: 'object',
						description: 'it is object',
						position: 0,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
				}



				this.index = {
					0: new ContentProp({
						type: 'landing',
						description: 'it is landing',
						position: 0,
						bgType: 'img',
						bgAlt: 'img4bg',
						bgPath: './img/dLoadImgs/d0.jpg',
						textKey: 0,
						align: 'center',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: true,

					}),
					1: new ContentProp({
						type: 'display',
						description: 'it is display 1',
						position: 2,
						bgType: null,
						bgAlt: null,
						bgPath: null,
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/dLoadimgs/d7.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					2: new ContentProp({
						type: 'display',
						description: 'it is display 1',
						position: 2,
						bgType: null,
						bgAlt: null,
						bgPath: null,
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/dLoadimgs/d7.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					3: new ContentProp({
						type: 'display',
						description: 'it is display 2',
						position: 3,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_2',
						align: 'right',
						mediaSrc: './img/img_2.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					4: new ContentProp({
						type: 'display',
						description: 'it is display 3',
						position: 4,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_3',
						align: 'left',
						mediaSrc: './img/img_3.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					5: new ContentProp({
						type: 'slider',
						description: 'it is slider 1',
						position: 5,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_2',
						align: 'center',
						mediaSrc: './img/img_3.jpg',
						mediaAlt: 'here can img!',
						modules: {
							0: new ContentProp({}),
							1: new ContentProp({}),
							2: new ContentProp({}),
						},
						ready: false,
					}),
					6: new ContentProp({
						type: 'display',
						description: 'it is display 1',
						position: 6,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					7: new ContentProp({
						type: 'slider',
						description: 'it is slider 1',
						position: 7,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_2',
						align: 'simmetrical',
						mediaSrc: './img/img_3.jpg',
						mediaAlt: 'here can img!',
						modules: [
							new ContentProp({
								type: 'slide',
								description: 'it is slide 0',
								position: 0,
								bgType: 'img',
								bgAlt: 'music album 4 bg',
								bgPath: './img/img_0.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_0.jpg',
								mediaAlt: 'music album',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 1',
								position: 1,
								bgType: 'img',
								bgAlt: 'Krovostok album img 4 bg',
								bgPath: './img/img_1.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_1.jpg',
								mediaAlt: 'Krovostok - river of blood',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 2',
								position: 2,
								bgType: 'img',
								bgAlt: 'Krovostok album img 4 bg ',
								bgPath: './img/img_2.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_2.jpg',
								mediaAlt: 'Krovostok - studen',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 3',
								position: 3,
								bgType: 'img',
								bgAlt: 'Music album of remixes 4 bg',
								bgPath: './img/img_3.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_3.jpg',
								mediaAlt: 'can not stop',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 4',
								position: 4,
								bgType: 'img',
								bgAlt: 'Krovostok album img 4 bg ',
								bgPath: './img/img_4.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_4.jpg',
								mediaAlt: 'Skvoznoe krovostok',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 5',
								position: 5,
								bgType: 'img',
								bgAlt: 'node js img 4 bg',
								bgPath: './img/img_5.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_5.jpg',
								mediaAlt: 'node js',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 6',
								position: 6,
								bgType: 'img',
								bgAlt: 'php scheme 4 bg',
								bgPath: './img/img_6.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_6.jpg',
								mediaAlt: 'php scheme',
							}),
							new ContentProp({
								type: 'slide',
								description: 'it is slide 7',
								position: 7,
								bgType: 'img',
								bgAlt: 'eve disconnect img 4 bg ',
								bgPath: './img/img_7.jpg',
								textKey: '',
								align: 'simmetrical',
								mediaSrc: './img/img_7.jpg',
								mediaAlt: 'disconnect img',
							}),



						],
						ready: false,
					}),
					8: new ContentProp({
						type: 'display',
						description: 'it is display 1',
						position: 8,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),
					9: new ContentProp({
						type: 'display',
						description: 'it is display 1',
						position: 9,
						bgType: 'img',
						bgAlt: 'ok',
						bgPath: 'path',
						textKey: 'display_1',
						align: 'left',
						mediaSrc: './img/img_1.jpg',
						mediaAlt: 'here can img!',
						ready: false,
					}),

				}
			}

			start() {
				this.langOption()
				this.buildSiteMap()
				//this.logger(this)
			}
			logger(elem) {
				console.log(elem);
				console.dir(elem);
			}
		}

		const set = new Set()
		set.start();
		return set

	} catch (error) {
		console.log('set Error: ', error);
	}

})()