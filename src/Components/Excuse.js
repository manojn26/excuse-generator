import { useState } from "react";
import Axios from "axios";
import { Button } from "@mui/material";

export default function Excuse() {
  const [category, setCategory] = useState("");
  const [excuseData, setExcuseData] = useState(null);
  const [activeBtn, setActiveBtn] = useState("general");
  const btnHandler = (e) => {
    setActiveBtn(e.target.value);
    setCategory(e.target.value);
    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${e.target.value}/`
    ).then((response) => {
      // console.log(response.data);
      setExcuseData(response.data[0]);
    });
    console.log(activeBtn);
  };
  return (
    <div>
      <h1 className='headingText'>Excuse Generator</h1>

      <div className='button-container'>
        <Button
          variant={activeBtn === "family" ? "contained" : "outlined"}
          value='family'
          color='secondary'
          onClick={btnHandler}
        >
          Family
        </Button>
        <Button
          variant={activeBtn === "party" ? "contained" : "outlined"}
          value='party'
          color='info'
          onClick={btnHandler}
        >
          Party
        </Button>
        <Button
          variant={activeBtn === "office" ? "contained" : "outlined"}
          value='office'
          color='success'
          onClick={btnHandler}
        >
          Office
        </Button>
        <Button
          variant={activeBtn === "children" ? "contained" : "outlined"}
          value='children'
          color='warning'
          onClick={btnHandler}
        >
          Children
        </Button>
        <Button
          variant={activeBtn === "college" ? "contained" : "outlined"}
          value='college'
          onClick={btnHandler}
        >
          College
        </Button>
        <Button
          variant={activeBtn === "developers" ? "contained" : "outlined"}
          value='developers'
          color='error'
          onClick={btnHandler}
        >
          Developers
        </Button>
      </div>
      <div className='excuse-for'>
        <p>Excuse For : {category.toUpperCase()}</p>
      </div>
      <div className='excuse-data'>
        {excuseData?.excuse ? (
          <p className='excuse'>{excuseData?.excuse}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
