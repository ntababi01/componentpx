import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Address from "./Components/Address";
import FullName from "./Components/FullName";
import ProfilePhoto from "./Components/ProfilePhoto";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfilePhoto />
        <FullName />
        <Address />
      </header>
    </div>
  );
}

export default App;
