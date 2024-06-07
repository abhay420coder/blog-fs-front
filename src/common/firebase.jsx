// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbIBnRmA8w3HIGRxjBAMubJlDkIorynnM",
  authDomain: "blog-fs-2aace.firebaseapp.com",
  projectId: "blog-fs-2aace",
  storageBucket: "blog-fs-2aace.appspot.com",
  messagingSenderId: "561629091313",
  appId: "1:561629091313:web:bff09d4e79505bf3472050",
  measurementId: "G-CDFMF3H4B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// google auth

const provider = new GoogleAuthProvider()

const auth = getAuth();

export const authWIthGoogle = async () =>{

    let user = null;

    await signInWithPopup(auth,provider)
        .then((result)=>{
            user = result.user;
        })
        .catch((err)=>{
            console.log(err);
        })

    return user;
}



