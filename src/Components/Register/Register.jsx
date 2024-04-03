import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Register() {
    const {useRegister}=useContext(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const Name = e.target.Name.value;
        const Photo = e.target.Photo.value;
        const Email = e.target.Email.value;
        const Password = e.target.Password.value;
        const ConfirmPassword = e.target.ConfirmPassword.value;
        console.log(Name,Photo,Email,Password,ConfirmPassword)
        
        useRegister(Email,Password)
    }
    
  return (
    <div className="w-1/2 mx-auto border-2 border-red-200 p-6 rounded-xl min-w-[500px] ">
    <form onSubmit={handleRegister}>
       <div>
           <p>Name</p>
           <input type="text"
           name="Name" placeholder="Name" className="input input-bordered w-full max-w-2xl" />
       </div>
       <div>
           <p>Photo</p>
           <input type="text"
           name="Photo" placeholder="Photo" className="input input-bordered w-full max-w-2xl" />
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
       <div>
           <p>Confirm Password</p>
           <input type="password"
           name="ConfirmPassword" placeholder="ConfirmPassword" className="input input-bordered w-full max-w-2xl" />
       </div>
     
       <div className="mt-2">
           <button className="btn btn-primary w-full max-w-2xl">Register</button>
       </div>
    </form>
   </div>
  )
}
