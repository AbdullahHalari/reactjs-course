import db from "./firebase";
import { useState } from "react";

const Firestore = () => {
  const [name, Setname] = useState("");
  
  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("question")
      .doc('qno1')
      .collection("answer")
      .add({
        ans: name,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <center>
        <form
          style={{ marginTop: "200px" }}
          onSubmit={(event) => {
            sub(event);
          }}
        >
          <input
            type="text"
            placeholder="your question"
            onChange={(e) => {
              Setname(e.target.value);
            }}
          />
          <br />
          <br />
          
          <br />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default Firestore;
