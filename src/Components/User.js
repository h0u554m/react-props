import React from "react";

function User(props) {
  return (
    <>
      <div className="User" style={{ color: "grey" }}>
        <h1>{"fullname: " + props.User.fullname}</h1>
        <h5>{"profession: " + props.User.profession}</h5>
        <h1>Skills:</h1>
        <ul>
          {props.User.bio.skils.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
        <button onClick={() => props.User.handleName("good joob")}>
          {props.User.text}
        </button>
      </div>
    </>
  );
}

export default User;
