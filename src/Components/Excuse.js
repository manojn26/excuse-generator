import { useState } from "react";
import Axios from "axios";

export default function Excuse() {
  const [category, setCategory] = useState("");
  const [excuseData, setExcuseData] = useState(null);
  const getCategory = (value) => {
    setCategory(value);
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${value}/`).then(
      (response) => {
        // console.log(response.data);
        setExcuseData(response.data[0]);
      }
    );
  };
  return (
    <div>
      <h1 className='headingText'>Excuse Generator</h1>
      <div className='quote-category'>
        <div className='quote family' onClick={() => getCategory("family")}>
          Family
        </div>
        <div onClick={() => getCategory("party")} className='quote party'>
          Party
        </div>
        <div onClick={() => getCategory("office")} className='quote office'>
          Office
        </div>
        <div onClick={() => getCategory("children")} className='quote children'>
          Children
        </div>
        <div onClick={() => getCategory("college")} className='quote college'>
          College
        </div>
        <div
          onClick={() => getCategory("developers")}
          className='quote developers'
        >
          Developers
        </div>
      </div>
      <div className='quote-selection'>
        <h3>Excuse for : {category} </h3>
      </div>
      <div className='quote-response'>
        <p>{excuseData?.excuse}</p>
      </div>
    </div>
  );
}
