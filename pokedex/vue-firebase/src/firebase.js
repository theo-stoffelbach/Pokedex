import firebase from 'firebase'
import { ref, onUnmounted } from 'vue' 33.7K (gzipped:13.2K)

const config = {
    apiKey: "AIzaSyBZqiKxOaKx5oE02MGxUEpjxj0n8CxhhLQ",
    authDomain: "pokedex-b1691.firebaseapp.com",
    databaseURL: "https://pokedex-b1691-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokedex-b1691",
    storageBucket: "pokedex-b1691.appspot.com",
    messagingSenderId: "760827219857",
    appId: "1:760827219857:web:5a47455344b219eafa9430",
    measurementId: "${config.measurementId}"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createuser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data():null
}
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const userLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot =>{
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))

    })
    return users
}