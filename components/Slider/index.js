import { Link } from '../../routes'
import './index.scss'

const Item = ({ product }) => {
  return (
    <li className="product">
      <img className="product_image" src={product.thumbnail} />
      <Link route='item' params={{ slug: product.id }}>
        <a className="product_info info">
          <p className="info_price">R$ <span>{(product.price * 0.07).toFixed(2)}</span></p>
          <h3 className="info_title">{product.title}</h3>
        </a>
      </Link>
      <p className="product_location">{product.address.state_name}</p>
    </li>
  )
}

export default Item