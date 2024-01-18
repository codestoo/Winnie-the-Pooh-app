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
    <div className="row pt-2">
      <div className="d-flex flex-column align-items-center col-lg-6 col-12 order-lg-1 order-2">
        <img
          className="w-75 pt-5"
          // style={{ width: "30vw" }}
          src="../images/50554093697_efe400817f_k.jpg"
        />
        <img
          className="w-100 pt-5"
          // style={{ width: "35vw", paddingTop: "25px" }}
          src="../images/50554093727_3d7b468344_k.jpg"
        />
      </div>
      <div className="col-lg-6 col-12 order-lg-2 order-1">
        <div className="d-flex justify-content-lg-start justify-content-center">
          <div className="p-4 border border-dark quoteContainer">
            <h2>Words of Wisdom from Pooh Bear and Friends</h2>
            <div className="mx-lg-5 m-2">"{quoteObject.quote}"</div>
            <Button
              onClick={fetchQuote}
              variant="dark"
              style={{ backgroundColor: "#6d4d36" }}
            >
              Get New Quote
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-lg-end justify-content-center">
          <img
            className="width85"
            style={{ paddingTop: "100px" }}
            src="../images/50554093672_29613e5e9e_k.jpg"
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default Quotes;
