import React from "react";
import characterInfo from "./characters.json";

function Home() {
  console.log(characterInfo);
  return (
    <div>
      <h1>The Story Behind the Story of Winnie the Pooh</h1>
      <p>
        There's more to learn about this amiable bear than you may have
        realized. The inspiration for the story may surprise you and the
        creation of the character Christopher Robin, like our own children, was
        himself a story-teller, inspring his own father's imagination. In the
        pages that follow you will learn more about the author, the characters
        and the enduring, endearing, words of wisdom.
      </p>

      <div className="d-flex justify-content-around pt-4">
        <img
          style={{ width: "50vw" }}
          src="../images/50553227108_6bbe219845_k.jpg"
        />
        <img
          className="me-4"
          style={{ width: "22vw" }}
          src="../images/50554093777_9515b6941a_k.jpg "
        />
      </div>
    </div>
  );
}

export default Home;
