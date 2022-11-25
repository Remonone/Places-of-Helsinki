
import React from "react"

interface MarkerCoords {
  text: string
}

export const Place = (props: {marker: MarkerCoords}) => {
  return <div>{props.marker.text}</div>
}
