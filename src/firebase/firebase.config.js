import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}; */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfM3fAaQfwkGZwenqAZktQXde9qVk4j28",
  authDomain: "buzztalk-d7f2b.firebaseapp.com",
  projectId: "buzztalk-d7f2b",
  storageBucket: "buzztalk-d7f2b.appspot.com",
  messagingSenderId: "942869402833",
  appId: "1:942869402833:web:a3cae38aa12059abc3a1f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
