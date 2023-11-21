import React from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import "./RowingLog.css";

function RowingLog() {
  const auth = getAuth();
  const user = auth.currentUser;
  var displayPhoto = user.photoURL;
  
  if(displayPhoto == null){
    updateProfile(auth.currentUser, {
      photoURL:
        "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
    }).then(() => {
      displayPhoto = user.photoURL;
    });
  }
  const signOutGoogle = (e) => {
    return signOut(auth);
  };

  return (
    <div className="rowingLog-container">
      <h1>{user.displayName || user.email}</h1>
      <button className="google">
        <img src={displayPhoto} alt="avatar" />
        <h5 onClick={signOutGoogle}>Sign Out</h5>
      </button>
    </div>
  );
}

export default RowingLog;
