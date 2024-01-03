import { useState } from "react";
import "./structure.css";

function InputBox({type, value, changeFunction}){
  return <input
  type={type}
  defaultValue={value}
  onChange={(e)=>{changeFunction(e.target.value)}}/>
}

export default function GeneralInformation(){
  const [nameValue, setNameValue] = useState("Peter Lustig");
  const [streetValue, setStreetValue] = useState("Random Road 24");
  const [postalCodeValue, setPostalCodeValue] = useState(12345);
  const [townValue, setTownValue] = useState("Entenhausen");
  const [phoneNumberValue, setPhoneNumberValue] = useState(123456789);
  const [editMode, setEditMode] = useState(false);

  function enableEditMode(){
    setEditMode(true);
  }


  return(
  <div>
    <h2>General Information</h2>
    <div id="infoSection" onClick={enableEditMode}>
      <div>
        <p className="key">Name:</p>
        {!editMode
        ? <p className="value">{nameValue}</p>
        : <InputBox
          type="text"
          value={nameValue}
          changeFunction={setNameValue}
        />}
      </div>
      <div>
        <p className="key">Street: </p>
        {!editMode
        ? <p className="value">{streetValue}</p>
        : <InputBox
          type="text"
          value={streetValue}
          changeFunction={setStreetValue}
        />}
        
      </div>
      <div>
        <p className="key">Postal Code:</p>
        {!editMode
        ? <p className="value">{postalCodeValue}</p>
        : <InputBox
          type="number"
          value={postalCodeValue}
          changeFunction={setPostalCodeValue}
        />}
        
      </div>
      <div>
        <p className="key">Town:</p>
        {!editMode
        ? <p className="value">{townValue}</p>
        : <InputBox
          type="text"
          value={townValue}
          changeFunction={setTownValue}
        />}
      </div>
      <div>
        <p className="key">Phone Number:</p>
        {!editMode
        ? <p className="value">{phoneNumberValue}</p>
        : <InputBox
          type="number"
          value={phoneNumberValue}
          changeFunction={setPhoneNumberValue}
        />}
      </div>
    </div>
    {editMode ? <button onClick={
      (e)=>{setEditMode(false)}
    }>Save Changes</button>
    : null}
  </div>
  )
  
}