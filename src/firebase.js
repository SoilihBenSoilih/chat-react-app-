import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrlQmsuG-ojMdD_BvjJHI0S_5-gksPDy4",
    authDomain: "chatbox-app-bl248.firebaseapp.com",
    databaseURL: "https://chatbox-app-bl248-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base