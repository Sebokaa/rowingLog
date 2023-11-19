import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignInPage from "./Components/signInPage";
import RowingLog from "./Components/rowingLog";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (
        <>
          <RowingLog />
        </>
      ) : (
        <>
          <SignInPage />
        </>
      )}
    </div>
  );
}

export default App;
