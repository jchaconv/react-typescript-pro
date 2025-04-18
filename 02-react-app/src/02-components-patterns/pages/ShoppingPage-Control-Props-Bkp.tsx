import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";


export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      {/* Inicio Control Props */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              // si product.id es nulo entonces retorno 0 de lo contrario retorno el valor
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)'
                }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (

            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: '100px'
              }}
              onChange={onProductCountChange}
              value={product.count}

            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)'
                }}
              />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      {/*<div>
            <code>
              {JSON.stringify(shoppingCart, null, 5)}
            </code>
          </div>*/}
      {/* Fin Control Props */}
    </div>
  )
}
