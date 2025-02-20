import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {



  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      {/* Inicio State Initializer */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
            //maxCount: 10
          }}
        >
          {
            ({ reset, isMaxCountReached, count, maxCount, increaseBy }) => (
              <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
              </>
            )
          }
        </ProductCard>
      </div>
      {/* Fin State Initializer */}
    </div>
  )
}
