import { useState } from "react";
import "./structure.css";
import InputBox from "./InputBox";

function School(){
  const [startDate, setStartDate] = useState("May 2013");
  const [endDate, setEndDate] = useState("August 2021");
  const [location, setLocation] = useState("Berlin");
  const [schoolName, setSchoolName] = useState("School Name");
  const [degreeName, setDegreeName] = useState("Degree Name");

  const [editMode, setEditMode] = useState(false);
  return (
    <div className="grid" onClick={()=>{
      setEditMode("true");
    }}>
      <div>
        {editMode
        ? <>
            <InputBox
              type="date"
              value={startDate}
              changeFunction={setStartDate}
            />
            <InputBox
              type="date"
              value={endDate}
              changeFunction={setEndDate}
            />
          </>
        : <p>{startDate} - {endDate}</p>
        }
        {editMode 
        ? <InputBox
            type="text"
            value={location}
            changeFunction={setLocation}
          />
        : <p>{location}</p>
        }
      </div>
      <div>
        {editMode
        ? <>
          <InputBox
            type="text"
            value={schoolName}
            changeFunction={setSchoolName}
          />
          <br/>
          <InputBox
            type="text"
            value={degreeName}
            changeFunction={setDegreeName}
          />
          </>
        : <>
          <p>{schoolName}</p>
          <p>{degreeName}</p>
          </>
        }
      </div>
      {editMode
      ? <div>
        <button className="educationalButton" onClick={
          ()=>{setEditMode(false)}
        }>Save Changes</button>
      </div>
      : null}
    </div>
  )
}

export default function EducationalExperience(){
  return (
    <div>
      <h2>Educational Experience</h2>
      <div>
        <School />
        <School />
      </div>
    </div>
  )
}

//shool
//degree
//start & end
//location