import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/Firebase"
import { createContext } from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
const useRegister =(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>console.log(result))
};

const userSignIn = (email,password)=>{
   signInWithEmailAndPassword(auth,email,password)
   .then(result=>console.log(result))
}

const authInfo ={
    useRegister,
    userSignIn
}
  return (
    <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      
    </div>
  )
}
