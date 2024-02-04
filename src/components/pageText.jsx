
import set from "../core/set.js"
import { useCommonCon } from "../core/commonContext.jsx";

export default function PageText() {
	const { pos } = useCommonCon()

	const areasCss = {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: set.index[pos].type === 'landing' ? '100 %' : '50 %',
		maxHeight: '100%',
		overflow: 'hidden',
		padding: '3%',

	}

	const textWrapCss = {
		top: 0,
		textAlign: 'center',
	}

	const headerCss = {
		fontSize: `${set.fontSizeH}px`,
		backgroundColor: set.colors.bgText,
		color: set.colors.headers,
		marginBottom: '10px',

	}
	const textContCss = {
		fontSize: `${set.fontSize}px`,
		backgroundColor: set.colors.bgText,
		color: set.colors.primary_text
	}

	return (
		<div
			className="text-area"
			style={areasCss}>
			<div className="text-wrap"
				style={textWrapCss}>
				{set.index[pos].type === 'landing' ?
					<h1 className="header" style={headerCss}>
						{set.text[pos].header}
					</h1>
					:
					<h2 className="header" style={headerCss}>
						{set.text[pos].header}
					</h2>
				}

				<span className="text-cont" style={textContCss}>
					{set.text[pos].article}
				</span>
			</div>
		</div>
	)
}