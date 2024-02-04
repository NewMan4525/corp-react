
import set from "../core/set.js"
import PageImg from "./pageImg.jsx"
import PageText from "./pageText.jsx"
import { useCommonCon } from "../core/commonContext.jsx";
import Object from "./object.jsx";

export default function Landing() {
	const { pos } = useCommonCon()
	const landCss = {
		width: '100%',
		height: '85%',
	}
	const landFrameCss = {
		position: 'relative',
		display: 'flex',
		backgroundColor: 'teal',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		boxShadow: '0 0 100px 0 black'
	}

	return (
		<>
			<div
				id="landing"
				style={landCss}>

				<div

					style={landFrameCss}
					className="landing_frame">
					<Object time={5000} timeout={3000} />

					<PageText />

				</div>
			</div>
		</>
	)
}