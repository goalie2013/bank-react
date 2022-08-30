import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserContext } from "./main";

function App() {
  return (
    <div className="app-wrapper">
      <UserContext.Provider
        value={{
          users: [
            {
              name: "SampleUser",
              email: "email@address.com",
              password: "password",
              balance: 0,
              transactions: [],
            },
          ],
        }}
      >
        <NavBar />
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
