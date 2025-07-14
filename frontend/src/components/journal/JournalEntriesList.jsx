import { useEffect, useState } from "react"
import { Loader, CalendarFold } from "lucide-react"
import { useParams } from "react-router-dom"
import JournalCard from "./JournalCard"

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
                  <JournalCard key={entry.date} date={entry.date} word={entry.word} />
                )
              })}
            </div>
        </div>
    </div>
    </>
  )
}

export default JournalEntriesList