import React from "react";

function Login(){
  return(
    <div>
      <h1> Login </h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="SUbmit" />
      </form>
    </div>
  )
}

export default Login;