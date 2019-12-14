import Product from '../Product'
import './index.scss'

const ProductList = ({ products }) => {
  return (
    <ul className="products-list">
      {products.map(item => (
        <Product key={item.id} product={item}></Product>
      ))}
    </ul>
  )
}

export default ProductList