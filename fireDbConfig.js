// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"; // Ensure the correct imports
import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW3stc8wJbFgaeI6kCc6aPxk6uvv3VLeg",
  authDomain: "netflixclone-bcaac.firebaseapp.com",
  projectId: "netflixclone-bcaac",
  storageBucket: "netflixclone-bcaac.appspot.com",
  messagingSenderId: "96378450599",
  appId: "1:96378450599:web:16aad737dc23580f3c6182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Start
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), { // Changed "user" to "users" to follow Firestore naming conventions
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Error during signup: ", error);
    toast.error(error.message.split("/")[1].split("-").join)(" "); // Using error.message for a more user-friendly alert
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error during login: ", error);
    toast.error(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth); 
  } catch (error) {
    console.error("Error during logout: ", error);
    toast.error(error.message); 
  }
};

export { auth, db, login, signup, logout };
