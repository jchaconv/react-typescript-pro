import { useProduct } from '../hooks/useProduct';

import { ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { Provider } from '../store/ProductContext';


export const ProductCard = ({ product, children, className, style }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children}

            </div>
        </Provider>
    )
}