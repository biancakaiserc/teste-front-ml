import React, { Component } from 'react'
import Layout from '../../layouts/Main'
import { getItemData, getItems } from '../../api/items'
import ProductList from '../../components/ProductList'

class ItemsListPage extends Component {
  static async getInitialProps ({ query }) {
    const json = await getItems(query.search)
    return {
      items: json.results,
      slug: query.search
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <ProductList products={this.props.items}></ProductList>
      </Layout>
    )
  }
}

export default ItemsListPage