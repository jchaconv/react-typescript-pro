import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5);

    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const timeline = useRef(gsap.timeline());

    const handleClick = () => {
        if (counter === maxCount) return;
        setCounter(prev => prev + 1);
    }

    useLayoutEffect(() => {

        if (!elementToAnimate.current) return;

        //console.log('%cSe llegó al valor máximo!', 'color:red; background-color: black;')

        timeline.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                        .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
                        .pause();


    }, []);

    useEffect(() => {
        //if(counter < maxCount) return;

        timeline.current.play(0);        

    }, [counter]);


    return {
        counter,
        elementToAnimate,
        handleClick
    }

}