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

  if(editMode){
  return <div>
    <h2>General Information</h2>
    <div id="infoSection" onClick={enableEditMode}>
      <div>
        <p className="key">Name:</p>
        <InputBox
          type="text"
          value={nameValue}
          changeFunction={setNameValue}
        />
      </div>
      <div>
        <p className="key">Street: </p>
        <InputBox
          type="text"
          value={streetValue}
          changeFunction={setStreetValue}
        />
      </div>
      <div>
      <p className="key">Postal Code:</p>
      <InputBox
          type="number"
          value={postalCodeValue}
          changeFunction={setPostalCodeValue}
        />
      </div>
      <div>
      <p className="key">Town:</p>
      <InputBox
          type="text"
          value={townValue}
          changeFunction={setTownValue}
        />
      </div>
      <div>
      <p className="key">Phone Number:</p>
      <InputBox
          type="number"
          value={phoneNumberValue}
          changeFunction={setPhoneNumberValue}
        />
      </div>
    </div>
    <button onClick={
      (e)=>{setEditMode(false)}
    }>Save Changes</button>
  </div>

  } else{
    return <div>
    <h2>General Information</h2>
    <div id="infoSection" onClick={enableEditMode}>
      <div>
        <p className="key">Name:</p>
        <p className="value">{nameValue}</p>
      </div>
      <div>
        <p className="key">Street: </p>
        <p className="value">{streetValue}</p>
      </div>
      <div>
        <p className="key">Postal Code:</p>
        <p className="value">{postalCodeValue}</p>
      </div>
      <div>
        <p className="key">Town:</p>
        <p className="value">{townValue}</p>
      </div>
      <div>
        <p className="key">Phone Number:</p>
        <p className="value">{phoneNumberValue}</p>
      </div>
    </div>
  </div>
  }
  
}

//Todo: Save Changes Button
//testen on changeFunction funktioniert