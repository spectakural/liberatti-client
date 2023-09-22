// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA6K3K7NQWVStdXoSfdf9EosjKsekkivJg",
  authDomain: "lib-mgmt-f224d.firebaseapp.com",
  projectId: "lib-mgmt-f224d",
  storageBucket: "lib-mgmt-f224d.appspot.com",
  messagingSenderId: "1063216089827",
  appId: "1:1063216089827:web:0d1a0d3069e24b0e7c93d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;