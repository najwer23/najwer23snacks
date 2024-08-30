import { useEffect, useRef, useState, MouseEvent } from "react";
import { Button } from "../button";
import styles from "./Carousel.module.css"
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { CarouselType } from "./Carousel.types";

export const Carousel = ({ children, arrowLeftIcon, arrowRightIcon, gap = "60px" }: CarouselType) => {
	const carouselRef = useRef<any>(null)
	const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false)
	const [showArrowRight, setShowArrowRight] = useState<boolean>(false)
	const [width] = useWindowSize();

	const getChildWidth = () => {
		let style = getComputedStyle(carouselRef.current?.childNodes[1]);
		return parseInt(style.marginLeft) + parseInt(style.marginRight) + carouselRef.current?.childNodes[1].offsetWidth + Number(gap.slice(0, -2))
	}

	useEffect(() => {
		let timerId = setTimeout(() => {
			handleScroll()
		}, 1);

		return () => clearTimeout(timerId);
	}, [width]);

	const slideLeft = () => {
		carouselRef.current.scrollLeft -= Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()

		// let trans = carouselRef.current.scrollLeft - Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()
		// let transFinal = 0;
		// let arr = [];

		// for (let i = getChildWidth(); i <= (carouselRef.current?.childNodes.length - 2) * getChildWidth(); i += getChildWidth()) {
		// 	arr.push(i)
		// 	if (i > trans) {
		// 		transFinal = i - getChildWidth();
		// 		break;
		// 	}
		// }

		// carouselRef.current.scrollLeft = transFinal
	}

	const slideRight = () => {
		carouselRef.current.scrollLeft += Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()

		// let trans = carouselRef.current.scrollLeft + Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()
		// let transFinal = 0;

		// for (let i = getChildWidth(); i <= (carouselRef.current?.childNodes.length - 2) * getChildWidth(); i += getChildWidth()) {
		// 	if (i > trans) {
		// 		transFinal = i - getChildWidth();
		// 		break;
		// 	}
		// }

		// carouselRef.current.scrollLeft += transFinal - carouselRef.current.scrollLeft
	}

	const handleScroll = () => {
		if (carouselRef.current.scrollLeft <= 0) {
			setShowArrowLeft(false)
			if ((carouselRef.current.scrollWidth - carouselRef.current.clientWidth) !== 0) {
				setShowArrowRight(true)
			} else {
				setShowArrowRight(false)
			}
		} else if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
			setShowArrowLeft(true)
			setShowArrowRight(false)
		} else {
			setShowArrowLeft(true)
			setShowArrowRight(true)
		}
	}

	const drag = useRef<any>({
		isDown: false,
		startX: 0,
		scrollLeft: 0
	})

	const getEventKind = (event: MouseEvent | TouchEvent) => {
		if ("pageX" in event) {
			return event.pageX
		} else if ('touches' in event) {
			return event.touches[0].pageX
		}

		return 0
	}

	const onMouseDown = (e: MouseEvent) => {
		drag.current.isDown = true;
		drag.current.startX = e.pageX - carouselRef.current.offsetLeft;
		drag.current.scrollLeft = carouselRef.current.scrollLeft;
		carouselRef.current.style.scrollBehavior = "unset"
	}

	const onClick = (e: MouseEvent) => {
		if (drag.current.isMove) {
			e.preventDefault();
			e.stopPropagation()
		}
	}

	const onMouseUp = (e: MouseEvent) => {
		drag.current.isDown = false;
		carouselRef.current.style.scrollBehavior = "smooth"
	}

	const onMouseMove = (e: MouseEvent) => {
		if (!drag.current.isDown) {
			drag.current.isMove = false
			return;
		}

		e.preventDefault();

		const x = getEventKind(e) - carouselRef.current.offsetLeft;
		const walk = (x - drag.current.startX) * 1;

		if (Math.abs(walk) > 5) {
			drag.current.isMove = true;
		}

		carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
	}

	return (
		<div className={styles.carouselWrapper} style={
			{
				"--n23-c-carousel-gap": gap
			} as React.CSSProperties}
		>
			<div
				className={styles.carousel}
				ref={carouselRef}
				onClick={onClick}
				onScroll={handleScroll}
				onMouseDown={onMouseDown}
				onMouseLeave={onMouseUp}
				onMouseUp={onMouseUp}
				onMouseMove={onMouseMove}
			>
				<div className={[styles.arrowLeft, showArrowLeft && styles.arrowShow].join(' ')} >
					<Button
						text={arrowLeftIcon}
						ariaLabel={"move carousel left"}
						type={"button"}
						onClick={slideLeft} />
				</div>
				{children}
				<div className={[styles.arrowRight, showArrowRight && styles.arrowShow].join(' ')} >
					<Button
						text={arrowRightIcon}
						ariaLabel={"move carousel right"}
						type={"button"}
						onClick={slideRight} />
				</div>
			</div>
		</div>
	)
}