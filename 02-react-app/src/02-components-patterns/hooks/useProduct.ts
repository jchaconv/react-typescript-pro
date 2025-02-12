/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: UseProductProps) => {

    const [counter, setCounter] = useState(value);

    // !!onChange  → Si existe onChange
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if(isControlled.current) {
            // onChange!  → Indico que siempre tendrá valor
            // es como añadir && onChange en el if pero así
            // es más eficiente 
            return onChange!({count: value, product});
        }

        const newValue = Math.max(counter + value, 0);

        setCounter(newValue);

        // Si onChange trae valor ejecuto la función
        onChange && onChange({ count: newValue, product });


    }

    useEffect(() => {
        
        setCounter(value);

    }, [value]);


    return {
        counter,
        increaseBy
    }

}