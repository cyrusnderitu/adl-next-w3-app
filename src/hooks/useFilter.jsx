import {useState} from 'react'

const useFilter = ({sharedSession = true , sharedYear = "2008"}) => {
    const [showSession, setShowSession] = useState(sharedSession)
    const [eventYear, setEventYear] = useState(sharedYear)
    const [searchQuery, setSearchQuery] = useState("")

    const EVENT_YEARS = [
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
  ]

  return {
    showSession,
    setShowSession,
    searchQuery,
    setSearchQuery,
    eventYear,
    setEventYear,
    EVENT_YEARS,
  }
}

export default useFilter
