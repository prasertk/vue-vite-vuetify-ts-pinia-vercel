import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAwEpJGAMFyd9AkzB1bIYQv00-5o5Ror38",
        authDomain: "pkj-vue-vite-ts-vuetify.firebaseapp.com",
        projectId: "pkj-vue-vite-ts-vuetify",
        storageBucket: "pkj-vue-vite-ts-vuetify.appspot.com",
        messagingSenderId: "375992368168",
        appId: "1:375992368168:web:6fb866ed0f5026dcd3c91d"
    };


firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const db = firebase.firestore()

export { storage, db }