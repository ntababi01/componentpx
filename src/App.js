import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Address from "./component/Address";
import FullName from "./component/FullName";
import ProfilePhoto from "./component/ProfilePhoto";
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
