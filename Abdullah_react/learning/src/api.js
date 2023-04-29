import React,{useState,useEffect} from 'react'
import Axios from 'axios'
export const Api = ()=> {
  const [data,setData] = useState([]);

useEffect(()=>{

  // fetch("https://raw.githubusercontent.com/AbdullahHalari/Quran_api/master/quranapi2.json")
  // .then((res)=> res.json())
  // .then((json)=> setData(json))
  Axios.get("https://raw.githubusercontent.com/AbdullahHalari/Quran_api/master/quranapi2.json") 
  .then((res) => { setData(res.data[5].content)})
}
  ,[]
)
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/AbdullahHalari/Quran_api/master/quranapi2.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => alert(error))
      

  // }, []);
  // const surah = chapter.content.trim().split(/\s*\[[0-9]+\]\s*/).filter(a => a);
  return (
    //  examples + advance way but i use fetch 
    // <div>
    //   {data.map(
    //     (apidata, key) => <h1> {apidata.name_pron_en} </h1>,

    //   )}
    
    // </div>
    // <div>
    //   {data.length > 0 && (
    //     <ul>
    //       {data.map(user => (
    //         <li key={user.id}>{user.content.trim().split(/\s*\[[0-9]+\]\s*/).filter(a => a)}</li>
    //       ))}
    //     </ul>
    //    )}
      
    // </div>
    
    <div>
      {/* {data.map((item, index) =>
        <div key={index}>{item}</div>
      )} */}
      <p>{data}</p>
    </div>
  )
}
export default Api