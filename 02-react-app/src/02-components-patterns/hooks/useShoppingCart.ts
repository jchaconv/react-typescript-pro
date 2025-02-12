import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    // Por alguna razón reconoce el event y este trae los datos correspondientes. Se puede mostrar
    // en logs el evento completo y verificar lo que trae. Rpta: Lo hace así por la interfaz declarada.
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        //console.log({ count });

        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            console.log(toDelete);
            return rest;


            //eliminar del state cuando el count es 0
            /*if (count === 0) {
              const { [product.id]: toDelete, ...rest } = oldShoppingCart;
              console.log(toDelete)
              return rest;
            }
      
            return {
              ...oldShoppingCart,
              [product.id]: { ...product, count }
            };*/
        });

    }

    return {
        shoppingCart,
        onProductCountChange
    }


}