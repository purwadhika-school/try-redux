import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA,
  }
}

export const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL'
export const fetchProduct = () => {
  return {
    type: FETCH_PRODUCT_DETAIL,
    payload: getDataProduct()
  }
}

const getDataProduct = () => {
  const api = `http://172.104.50.9:3000/api/productdetails?filter[where][product_id]=422834`
  return axios.get(api)
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}