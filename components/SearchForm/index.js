import { Component } from 'react'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import Input from '../../handlers/input'
import './index.scss'

class SearchForm extends Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.props.formSearch) {
      console.log(this.props.formSearch.search.searchField)
      Router.push({
        pathname: '/items',
        query: { search: this.props.formSearch.search.searchField }
      })
    }
  }

  render () {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <Input
          controlLabel="Search"
          type="text"
          title="search"
          name="searchField"
          className="search-form_field"
        />
        <button type="submit" className="search-form_submit">Enviar</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  const formSearch = state.formReducer
  return {
    formSearch
  }
}

export default connect(mapStateToProps)(SearchForm)