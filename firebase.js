import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDmtF_NAiTYROwF_JHSt3tTVDIYArCmy3k',
  authDomain: 'disney-plus-ecc68.firebaseapp.com',
  projectId: 'disney-plus-ecc68',
  storageBucket: 'disney-plus-ecc68.appspot.com',
  messagingSenderId: '50371518580',
  appId: '1:50371518580:web:5f1dc49282c61ef5693121',
}

// Next JS check to see if the firebase app is already initialized
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db }
