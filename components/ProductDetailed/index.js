import './index.scss'

const ProductDetailed = ({ product, description }) => {
  return (
    <div className="product-detail">
      <div className="product-detail_highlight">
        <img className="product-detail_image" src={product.pictures[0].url} />
        <div className="product-detail_info info">
          <p className="info_condition">{product.condition}</p>
          <h1 className="info_title">{ product.title }</h1>
          <p className="info_price">R$ <span>{(product.price * 0.07).toFixed(2)}</span></p>
        </div>
      </div>
      <div className="product-detail_description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetailed