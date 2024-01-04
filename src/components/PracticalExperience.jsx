import { useState } from "react";
import "./structure.css";
import InputBox from "./InputBox";
import {v4 as uuid} from "uuid";

function Job({mykey, deleteCallback}){
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [location, setLocation] = useState("Location");
  const [position, setPosition] = useState("Position");
  const [employer, setEmployer] = useState("Employer");
  const [description, setDescription] = useState("Some Words about your Tasks at that Job.")

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
            value={position}
            changeFunction={setPosition}
          />
          <br/>
          <InputBox
            type="text"
            value={employer}
            changeFunction={setEmployer}
          />
          </>
        : <>
          <p><b>{position}</b></p>
          <p>{employer}</p>
          </>
        }
      </div>
      <div className="description">
        {editMode
        ? <textarea
          defaultValue={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          >
        </textarea>
        : <p className="descriptionText"><i>{description}</i></p>
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

export default function PracticalExperience(){
  const [joblist, setJoblist] = useState([]);
  function deleteJob(id) {
    setJoblist(prevList => {
      const newList = [...prevList];
      const index = newList.findIndex(val => val.props.mykey === id);
      if (index !== -1) {
        newList.splice(index, 1);
      }
      return newList;
    });
  }
  function addJob() {
    setJoblist(prevList => {
      const newList = [...prevList];
      newList.push(
        <Job
          key={uuid()}
          mykey={uuid()}
          deleteCallback={deleteJob}
        />
      );
      return newList;
    });
  }
  
  if(joblist.length == 0) addJob();
  return (
    <div onMouseMove={()=>{
      document.querySelector("#jobButton").className = "schoolButtoHover";
    }
    }
    onMouseLeave={()=>{
      document.querySelector("#jobButton").className = "schoolButton";
    }
    }>
      <h2>Practical Experience</h2>
      <div>
        {joblist.map(function(item){
          return item;
        })}
      </div>
      <button id="jobButton" className="schoolButton"
      onClick={()=>{
        addJob();
        }}
      >Add Job</button>
    </div>
  )
}