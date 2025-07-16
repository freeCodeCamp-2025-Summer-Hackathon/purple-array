import { useEffect, useState } from "react"
import { Loader, CalendarFold } from "lucide-react"
import { Link, useParams } from "react-router"

const JournalEntriesList = () => {

  const [entries, setEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const id = useParams()

  useEffect(()=>{
    fetch("/placeholderJournalEntries.json")
        .then((response)=>response.json())
        .then((data)=>{
            setEntries(data)
            setIsLoading(false)
            console.log(data)
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })
  },[])

  return (
    <>
    <div className="container mx-auto min-h-screen">
        <div className="card mx-auto max-w-3xl my-10 bg-base-200">
            <div className="card-actions p-4">        
              {isLoading && <div className="flex gap-3"><Loader />Loading...</div>}
              {entries.map((entry)=>{
                return (
                  <Link to={`${entry.date}`} key={entry.date} className="flex flex-1 basis-1/3 m-1 min-w-fit p-6 bg-base-100 rounded-md"> 
                    <div className="flex justify-between w-full">
                      <div className="flex gap-3"><CalendarFold className="text-primary" strokeWidth={1}/> {entry.date}</div>
                      <div>{entry.word}</div>                  
                    </div>
                  </Link>
                )
              })}
            </div>
        </div>
    </div>
    </>
  )
}

export default JournalEntriesList