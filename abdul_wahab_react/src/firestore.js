import db from "./firebase";
import { useEffect, useState } from "react";

const Firestore = () => {
  const [name, Setname] = useState('');
  const [info, setInfo] = useState([]);
  const [question,setQuestion] = useState('');
  console.log(question)
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
const Fetchdata = () => {
  db.collection("question")
    .doc("qno1")
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
useEffect(()=>{
  Fetchdata();
},[])
  return (
    <div>
      <center>
        <h1>Questions</h1>
        {info.map((data) => (
          <div>
            <p>{data.question}</p>
            {/* <p>{data.question}</p> */}
            <button onClick={()=>setQuestion(data.question)}>see answer</button>
          </div>
        ))}
        <h1>your question</h1>

        <form
          style={{ marginTop: "20px" }}
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
