import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../api/items'
import Layout from '../layouts/Main'
import ProductList from '../components/ProductList'

class IndexPage extends Component {
  static async getInitialProps () {
    const json = await getItems('all')
    return {
      items: json.results,
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

export default connect()(IndexPage)