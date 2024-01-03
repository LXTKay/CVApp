export default function InputBox({type, value, changeFunction}){
  return <input
  type={type}
  defaultValue={value}
  onChange={(e)=>{changeFunction(e.target.value)}}/>
}