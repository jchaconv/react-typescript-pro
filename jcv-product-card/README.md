# jcv-product-card

Este es un paquete de pruebas de despliegues en NPM

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jcv-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        //maxCount: 10
    }}
>
  {
    ({ reset, isMaxCountReached, countmaxCount, increaseBy }) => (
      <>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
      </>
    )
  }
</ProductCard>
```