
import set from "../core/set.js"
import { useCommonCon } from "../core/commonContext.jsx";

export default function PageImg() {
	const { pos } = useCommonCon()

	const areasCss = {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		maxHeight: '100%',
		overflow: 'hidden',
		padding: '3%',

	}

	const imgCss = {
		width: '100%',
		height: '100%'

	}
	return (
		<div
			className="img-area"
			style={areasCss}>
			<img
				className="img-cont"
				style={imgCss}
				src={set.index[pos].mediaSrc}
				alt={set.index[pos].mediaAlt}
			></img>
		</div>
	)
}