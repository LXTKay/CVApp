import "./MainDocument.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

export default function MainDocument(){
  return (
  <div className="sheet">
    <h1>Curriculum Vitae</h1>
    <GeneralInformation />
    <EducationalExperience />
    <PracticalExperience />
  </div>
  )
}