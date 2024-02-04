
import set from "../core/set.js"
import PageImg from "./pageImg.jsx"
import PageText from "./pageText.jsx"
import { useCommonCon } from "../core/commonContext.jsx";

export default function DisplayPage() {
	const { pos } = useCommonCon()
	const disCss = {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		height: '100%'
	}

	return (

		<div
			className="display"
			style={disCss}>

			{set.index[pos].align === 'center' ?
				<>
					{null}
				</>

				:
				set.index[pos].align === 'left' ?
					<>
						<PageImg pos={pos} />
						<PageText pos={pos} />
					</> : <>
						<PageText pos={pos} />
						<PageImg pos={pos} />
					</>
			}
		</div>
	)
}