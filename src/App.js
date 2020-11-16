import "./App.css";
import React, { useState } from "react";
import UserCard from "../src/Components/User";


function App() {
  const [text, settext] = useState("clik me");

  let user = {
    fullname: "Marulina Stewart",
    bio: {
      title: "full stack js developer",
      skils: ["js", "react", "nodejs", "redux", "html", "css"],
    },
    profession: "FullStack JS developer",
    handleName: settext,
    text: text,
  };
  return (
    <div className="App" style={{ color: "grey" }}>
      <UserCard User={user} />
    </div>
  );
}

export default App;
