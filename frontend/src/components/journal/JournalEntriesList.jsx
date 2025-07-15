import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const JournalEntriesList = () => {

  const [data, setData] = useState({})

  useEffect(()=>{
    fetch("/placeholderJournalEntries.json")
        .then((response)=>response.json())
        .then((data)=>{
            setData(data)
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
  },[])

  return (
    <>
    <div className="container min-h-screen">
        <div className="card mx-auto max-w-4xl h-[400px] bg-base-200">
            <div className="card-actions">        
            </div>
        </div>
    </div>
    </>
  )
}

export default JournalEntriesList