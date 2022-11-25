import React, { useEffect } from "react"
import Map from "./components/Map"
import { useAppDispatch } from "./redux/hooks"
import { fetchPlaces } from "./redux/places/placesSlice"

function App() {
  const dispatcher = useAppDispatch()
  useEffect(()=> {
    dispatcher(fetchPlaces())
  }, [fetchPlaces])
  return (
    <div className="App">
      <Map/>
      
    </div>
  )
}

export default App
