import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Main.css";

export default function Main() {
  return (
    <>
      <header></header>
      <main>
        <FontAwesomeIcon icon={faHeart} className="heart animate-heartbeat" />
        <div>
          <a href="#" className="bookmark"></a>
          <a href="#" className="bookmark"></a>
          <a href="#" className="bookmark"></a>
        </div>
      </main>
    </>
  );
}
