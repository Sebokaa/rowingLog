import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import "./RowingLog.css"

function RowingLog() {
    const auth = getAuth();
    const user = auth.currentUser;
    const signOutGoogle = (e) => {
        return signOut(auth)
    }

  return (
    <div className="rowingLog-container">
        <h1>{user.displayName || user.email }</h1>
        <button className = "google">
            <img src={user.photoURL} alt="avatar" />
            <h5 onClick = {signOutGoogle}>Sign Out</h5></button>
    </div>
  )
}

export default RowingLog