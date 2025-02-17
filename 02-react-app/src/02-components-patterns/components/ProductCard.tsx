import { useProduct } from '../hooks/useProduct';

import { ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { Provider } from '../store/ProductContext';


export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, isMaxCountReached, maxCount, reset } = useProduct({ product, onChange, value, initialValues });

    console.log(initialValues?.count);

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset

                    })
                }

            </div>
        </Provider>
    )
}