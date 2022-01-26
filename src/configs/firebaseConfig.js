import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// eslint-disable-next-line no-undef
const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: 'rikkeimockprojectk2.firebaseapp.com',
    databaseURL: 'https://rikkeimockprojectk2-default-rtdb.firebaseio.com/',
    projectId: 'rikkeimockprojectk2',
    storageBucket: 'rikkeimockprojectk2.appspot.com',
    messagingSenderId: '798235595393',
    appId: '1:798235595393:web:58a678d6c3ec6c6be4f380'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

// Get a reference to the database service
export default db
