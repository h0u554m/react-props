import "./App.css";
import ProfilPhoto from "../src/Components/profile/ProfilPhoto";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App"style={{ color: "grey" }}>
      <Card style={{ width: "18rem", color: "grey" }}>
        <ProfilPhoto />
      </Card>
    </div>
  );
}

export default App;
