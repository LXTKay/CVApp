import { useState } from "react";
import "./structure.css";
import InputBox from "./InputBox";
import {v4 as uuid} from "uuid";


function School({mykey, deleteCallback}){
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [location, setLocation] = useState("Location");
  const [schoolName, setSchoolName] = useState("School Name");
  const [degreeName, setDegreeName] = useState("Degree Name");

  const [editMode, setEditMode] = useState(false);
  return (
    <div className="grid" onClick={()=>{
      if(!editMode) setEditMode("true");
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
          <p><b>{schoolName}</b></p>
          <p>{degreeName}</p>
          </>
        }
      </div>
      {editMode
      ? <div>
          <button className="educationalButton" onClick={
            ()=>{setEditMode(false)}
          }>Save Changes</button>
          <button onClick={
            ()=>{
              deleteCallback(mykey);
            }
          }>Delete</button>
      </div>
      : null}
    </div>
  )
}

export default function EducationalExperience(){
  const [schoolList, setSchoolList] = useState([]);
  function deleteSchool(id) {
    setSchoolList(prevList => {
      const newList = [...prevList];
      const index = newList.findIndex(val => val.props.mykey === id);
      if (index !== -1) {
        newList.splice(index, 1);
      }
      return newList;
    });
  }
  function addSchool() {
    setSchoolList(prevList => {
      const newList = [...prevList];
      newList.push(
        <School
          key={uuid()}
          mykey={uuid()}
          deleteCallback={deleteSchool}
        />
      );
      return newList;
    });
  }
  
  if(schoolList.length == 0) addSchool();
  return (
    <div onMouseMove={()=>{
      document.querySelector("#schoolButton").className = "schoolButtoHover";
    }
    }
    onMouseLeave={()=>{
      document.querySelector("#schoolButton").className = "schoolButton";
    }
    }>
      <h2>Educational Experience</h2>
      <div>
        {schoolList.map(function(item){
          return item;
        })}
      </div>
      <button id="schoolButton" className="schoolButton"
      onClick={()=>{
        addSchool();
        }}
      >Add School</button>
    </div>
  )
}

//shool
//degree
//start & end
//location