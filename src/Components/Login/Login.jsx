import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Login() {
    const {userSignIn}=useContext(AuthContext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const Name = e.target.Name.value;
        const Email = e.target.Email.value;
        const Password = e.target.Password.value;
        console.log(Name,Email,Password)

        userSignIn(Email,Password)
        
    }
  return (
    <div className="w-1/2 mx-auto border-2 border-red-200 p-6 rounded-xl min-w-[500px] ">
    <form onSubmit={handleLogin}>
       <div>
           <p>Name</p>
           <input type="text"
           name="Name" placeholder="Name" className="input input-bordered w-full max-w-2xl" />
       </div>
       <div>
           <p>Email</p>
           <input type="email"
           name="Email" placeholder="Email" className="input input-bordered w-full max-w-2xl" />
       </div>
       <div>
           <p>Password</p>
           <input type="password"
           name="Password" placeholder="Password" className="input input-bordered w-full max-w-2xl" />
       </div>
     
       <div className="mt-2">
           <button className="btn btn-primary w-full max-w-2xl">Register</button>
       </div>
    </form>
   </div>
  )
}
