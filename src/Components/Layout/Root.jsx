import { Outlet } from "react-router-dom";
import Nav from "../Navigation/Nav";

export default function Root() {
  return (
    <div>
        <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}
