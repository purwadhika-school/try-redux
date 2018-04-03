/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import ProductDetail from './ProductDetail'


class Setup extends Component {
  componentDidMount(){
    this.props.dispatch(fetchData())
  }


  render() {
    return <ProductDetail />
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.data.items
  }
}

export default connect(mapStateToProps)(Setup)