import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function Home() {
    const user = useContext(AuthContext);
    console.log(user)

  return (
    <div>
     <h1>This is HOme page</h1>
    </div>
  )
}
