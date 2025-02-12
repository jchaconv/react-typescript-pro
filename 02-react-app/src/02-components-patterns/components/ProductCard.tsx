import { useProduct } from '../hooks/useProduct';

import { ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { Provider } from '../store/ProductContext';


export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({ product, onChange, value });

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