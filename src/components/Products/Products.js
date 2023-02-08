import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products] = useState(productsData);
  return (
    <section>
      {products.map((product) => (
        <Product key={shortid()} {...product} />
        // key={shortid()}
        // id={products.id}
        // name={product.name}
        // title={product.title}
        // colors={product.colors}
        // sizes={product.sizes}
        // basePrice={product.basePrice}
        // />
      ))}
    </section>
  );
};

export default Products;
