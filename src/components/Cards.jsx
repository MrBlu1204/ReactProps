import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details info={props.phone} />
        <Details info={props.email} />
      </div>
    </div>
  );
}

export default Cards;
