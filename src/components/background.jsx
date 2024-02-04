import Star from "./star"
import { useCommonCon } from "../context/commonContext";

export default function Background(params) {

	const bgCss = {
		position: 'fixed',
		backgroundColor: 'black',
		width: '100vw',
		height: '100vh',
		zIndex: 0,
	}

	const c = [];
	for (let i = 0; i < 5; i++)	c.push(i)



	return (

		<div className='bg' style={bgCss}>
			{c.map((i) => <Star key={i} queue={i} />)}
		</div>


	)
}