// Import Firestore database
import db from "./firebase";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import React from "react";

const Read = () => {
  const [info, setInfo] = useState([]);
    const [infoans, setansInfo] = useState([]);
useEffect(()=>{
  Fetchdata();
    Fetchdataans();
},[])
  // Start the fetch operation as soon as
  // the page loads
  // window.addEventListener("load", () => {
  //   Fetchdata();
  //   Fetchdataans();
  // });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("question")
      .doc('qno1')
      .collection("question")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  const Fetchdataans = () => {
    db.collection("question")
      .doc('qno1')
      .collection("answer")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setansInfo((arr) => [...arr, data]);
        });
      });
  };
  

  // Display the result on the page
  return (
    <div>
      <center>
        <h2>question</h2>
      </center>

      {info.map(
        (data) => (
          (<Frame course={data.question} />)
        )
      )}
      <div>
        <center>
          <h2>answer</h2>
        </center>
        {infoans.map(
          (data) => (
            (<Frame course={data.ans} />)
          )
        )}
      </div>
    </div>
  );
};

// Define how each display entry will be structured
const Frame = ({ course }) => {
  const [question, setQuestion] = useState("");
  console.log(question)
  console.log(course );
  return (
    <center>
      <div className="div">
        <p>Course : {course}</p>
        <Button variant="text" onClick={()=>setQuestion(course)}>
          click
        </Button>
      </div>
    </center>
  );
};

export default Read;
