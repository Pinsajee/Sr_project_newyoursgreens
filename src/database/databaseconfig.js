import { initializeApp } from "firebase";

const mywebapp = initializeApp({
  apiKey: "AIzaSyCM--xJ92UwVigXysE_JvwUoKWoXIjQhKc",
  authDomain: "yourgreensystem.firebaseapp.com",
  databaseURL: "https://yourgreensystem.firebaseio.com",
  projectId: "yourgreensystem",
  storageBucket: "yourgreensystem.appspot.com",
  messagingSenderId: "661131139494",
  appId: "1:661131139494:web:cebc1d5f5507d6daaad767",
  measurementId: "G-51YJ8ELGHR"
});

export const database = mywebapp.database();
export const comments = database.ref("comments");
export const caddyinfo = database.ref("caddy");
export const bookingbycustomers = database.ref("bookingbycustomers");
export const databaseURL = "https://yourgreensystem.firebaseio.com/.json";