import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchProduct } from "./actions";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct());
  }

  render() {
    return (
      <View>
        {this.props.data_product_saya ? (
          <Text style={{ fontSize: 35 }}>{this.props.data_product_saya.product_name}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data_product_saya: state.product_detail.data[0]
  };
};

export default connect(mapStateToProps)(ProductDetail);
