import { useState } from "react"
import Child from "./Child"
const Parent = () => {
    const[name,setName]=useState('')
    const getName=(data)=>{
        setName(data)
    }
  return (
    <>
    <h2>Parent: {name}</h2>
    <Child sendName={getName}/>
    </>
  )
}

export default Parent