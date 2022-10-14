import { Redirect, Route } from "react-router-dom";
import Main from "./Main";

function ProtectedRoute({...props}) {
  return(
    <Route>
      {
        () => props.loggedIn === true ? <Main {...props} /> : <Redirect to="./signin" />
      }
    </Route>
  )
}

export default ProtectedRoute;
