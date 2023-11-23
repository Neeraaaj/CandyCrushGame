import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-1stczR5Gv6CXdS7pVLcuzoLp2vXAu4I",
  authDomain: "candycrushauth.firebaseapp.com",
  projectId: "candycrushauth",
  storageBucket: "candycrushauth.appspot.com",
  messagingSenderId: "797355542135",
  appId: "1:797355542135:web:f866575779d21ff027a872",
  measurementId: "G-RZ52Y346RH",
  databaseURL: "https://candycrushauth-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);