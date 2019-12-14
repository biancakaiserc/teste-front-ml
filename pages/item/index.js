import React, { Component } from 'react'
import Layout from '../../layouts/Main'
import { getItemData, getItem } from '../../api/items'
import ProductDetailed from '../../components/ProductDetailed'

class ItemDetailsPage extends Component {
  static async getInitialProps ({ query }) {
    const json = await getItemData(query.slug)
    const jsonItem = json.itemData
    const jsonDesc = json.descData
    return { item: jsonItem, description: jsonDesc.plain_text }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <ProductDetailed product={this.props.item} description={this.props.description}/>
      </Layout>
    )
  }
}

export default ItemDetailsPage