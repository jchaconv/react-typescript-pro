/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from "react";
import { UseProductProps } from "../interfaces/interfaces";

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductProps) => {

    // Si viene un valor en initialValues lo toma sino toma el value
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);
        
        if(initialValues?.maxCount) {            
            newValue = Math.min(newValue, initialValues.maxCount);
        }        

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });


    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {

        if (!isMounted.current) return;

        setCounter(value);

    }, [value]);
    

    useEffect(() => {

        isMounted.current = true;

    }, [])



    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }

}