
const Child = ({sendName}) => {
  return (
    <button onClick={()=>sendName("Shalu yadav")}>Send Name</button>
  )
}

export default Child