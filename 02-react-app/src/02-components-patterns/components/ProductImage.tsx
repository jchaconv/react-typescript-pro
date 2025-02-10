import { CSSProperties, useContext } from "react";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from "../store/ProductContext";

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}


export const ProductImage = ({ img, className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            alt="Product Image"
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            style={style}
        />
    )
}