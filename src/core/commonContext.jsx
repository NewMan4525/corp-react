import { useState, useContext, createContext, useCallback, useMemo } from "react";
import set from './set'
import { debounce } from './helpers'

const ComCon = createContext()
export const useCommonCon = () => { return useContext(ComCon) }


export default function CommonContext({ children }) {
	const placesForSlides = [0, 1, 2, 3, 4]
	const [viewGroup, setViewGroup] = useState(placesForSlides)
	const [move, useMove] = useState(0)
	const [pos, setPos] = useState(0)
	const [currentSlide, useCurrentSlide] = useState(2)

	const indexKeyCount = new Map(Object.entries(set.index));

	const PosPrev = () => setPos(pos => pos - 1)
	const PosNext = () => setPos(pos => pos + 1)
	const PosMax = () => setPos(indexKeyCount.size - 1)
	const PosMin = () => setPos(0)

	// if (pos < 0) PosMax()
	// if (pos === indexKeyCount.size) PosMin()

	function wheelHandler(e) {
		switch (true) {
			case e.wheelDeltaY > 0: PosPrev(); break;
			case e.wheelDeltaY < 0: PosNext(); break;
		}
	}

	// const debounceWheelHandler = useCallback(debounce((e) => wheelHandler(e)
	// 	, set.animTime), [])
	// set.html.childNodes[2].addEventListener('wheel', debounceWheelHandler)

	// useEffect(() => {
	// 	body.removeEventListener('wheel', debounceWheelHandler)
	// }, [])



	function ChangeCurSlide(n) {
		useCurrentSlide(n)
	}

	function DefaultMove() {
		useMove((move) => move = null);
	}

	function nextViewGroup() {
		let newGroup = viewGroup.map((c) => {
			if (c === set.index[pos].modules.length - 1) c = -1
			return c + 1;
		})
		setViewGroup(newGroup)
		ChangeCurSlide(newGroup[2])
	}

	function prevViewGroup() {
		let newGroup = viewGroup.map((c) => {
			if (c < 1) c = set.index[pos].modules.length
			return c - 1;
		})
		setViewGroup(newGroup)
		ChangeCurSlide(newGroup[2])
	}

	function Left() {
		useMove((move) => move = 'left');
		setTimeout(DefaultMove, set.animTime);
		setTimeout(prevViewGroup, set.animTime);
	}

	function Right() {
		useMove((move) => move = 'right');
		setTimeout(DefaultMove, set.animTime);
		setTimeout(nextViewGroup, set.animTime);
	}

	return (
		<ComCon.Provider
			value={{
				move: move,
				pos: pos,
				viewGroup: viewGroup,
				placesForSlides: placesForSlides,
				Left,
				Right
			}}>
			{children}

		</ComCon.Provider>
	);
}
