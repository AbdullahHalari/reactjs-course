// Import Firestore database
import db from "./firebase";
import { useState } from "react";

const Read = () => {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("test_data")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          console.log(data);
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  // Display the result on the page
  return (
    <div>
      <center>
        <h2>Student Details</h2>
      </center>

      {info.map((data) => (
        <Frame course={data.email} name={data.name} age={data.password} />
      ))}
    </div>
  );
};

// Define how each display entry will be structured
const Frame = ({ course, name, age }) => {
  console.log(course + " " + name + " " + age);
  return (
    <center>
      <div className="div">
        <p>NAME : {name}</p>

        <p>Age : {age}</p>

        <p>Course : {course}</p>
      </div>
    </center>
  );
};

export default Read;
