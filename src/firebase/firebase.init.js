import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebasekey";
import { getAuth } from "firebase/auth";



const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


export default auth