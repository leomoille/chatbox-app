import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseApiCredential from './FirebaseApiCredential.js'

const firebaseApp = firebase.initializeApp(firebaseApiCredential)

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
