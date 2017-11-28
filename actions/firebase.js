import * as firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDx-dfaRJoNHLkTwDceh6Z6oyNrX8SE-kQ',
  authDomain: 'easyfood-c765c.firebaseapp.com',
  databaseURL: 'https://easyfood-c765c.firebaseio.com',
  projectId: 'easyfood-c765c',
  storageBucket: 'easyfood-c765c.appspot.com',
  messagingSenderId: '681460824206'
}

firebase.initializeApp(config)
export default firebase.firestore()
