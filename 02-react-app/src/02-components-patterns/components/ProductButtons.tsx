
import { CSSProperties, useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../store/ProductContext';

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    );


    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>

            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>+</button>

        </div>
    )
}
