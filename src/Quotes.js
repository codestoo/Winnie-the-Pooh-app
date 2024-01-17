import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Quotes() {
  const [quoteObject, setQuoteObject] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    let result = await fetch("https://winnie-the-pooh-api.onrender.com/random");
    result = await result.json();
    setQuoteObject(result);
  }

  return (
    <div className="d-flex justify-content-between pt-2">
      <div style={{ width: "32vw" }}>
        <img
          style={{ width: "30vw" }}
          src="../images/50554093697_efe400817f_k.jpg       "
        />
        <img
          style={{ width: "35vw", paddingTop: "25px" }}
          src="../images/50554093727_3d7b468344_k.jpg    "
        />
      </div>

      <div
        style={{ width: "60vw" }}
        className="d-flex flex-column justify-content-between"
      >
        <div className="d-flex justify-content-start">
          <div className="p-4 border border-dark w-75">
            <h2>Words of Wisdom from Pooh Bear and Friends</h2>
            <div className="mx-5 my-2  quoteContainer">
              "{quoteObject.quote}"
            </div>
            <Button
              onClick={fetchQuote}
              variant="dark"
              style={{ backgroundColor: "#6d4d36  " }}
            >
              Get New Quote
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <img
            style={{ width: "35vw" }}
            src="../images/50554093672_29613e5e9e_k.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Quotes;
