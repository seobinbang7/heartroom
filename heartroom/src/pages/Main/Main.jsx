import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Music from "../Music/Music";
// import Chat from "../Chat/Chat"
import "./Main.css";

export default function Main() {
  return (
    <>
      <header>{/* <Music /> */}</header>
      <div className="bookmark">
        <ul className="bookmark__ul">
          <li className="bookmark__li">
            <a>준비중</a>
          </li>
          <li className="bookmark__li">
            <a>준비중</a>
          </li>
          <li className="bookmark__li">
            <a>준비중</a>
          </li>
        </ul>
      </div>
      <main>
        <FontAwesomeIcon icon={faHeart} className="heart animate-heartbeat" />
        {/* <Chat /> */}
      </main>
    </>
  );
}
