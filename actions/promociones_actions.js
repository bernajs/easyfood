import firebase from './firebase'
import { GET_COLLECTIONS } from './types'
const db = firebase.collection('promociones')

export const get_promociones = () => async dispatch => {
  const data = []
  const collections = await db.get()
  collections.forEach(item => {
    data.push({ id: item.id, ...item.data() })
  })
  console.log(data)
  dispatch({ type: GET_COLLECTIONS, payload: data })
}
