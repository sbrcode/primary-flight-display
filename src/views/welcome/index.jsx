import { useState, useEffect } from "react"
import {
  Airspeed,
  Altimeter,
  TurnCoordinator,
  // AttitudeIndicator,
  // HeadingIndicator,
  // Variometer,
} from "react-typescript-flight-indicators"
import { Rows } from "../../data"

const Welcome = () => {
  const [airspeed, setAirSpeed] = useState(Rows[0].GS)
  const [altimeter, setAltimeter] = useState(Rows[0].RALT)
  const [turnCoord, setTurnCoord] = useState(Rows[0].ROLL)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1000)
    setAirSpeed(Rows[index].GS)
    setAltimeter(Rows[index].RALT)
    setTurnCoord(Rows[index].ROLL)
    return () => clearInterval(intervalId)
  }, [index])

  console.log(parseFloat(altimeter.replace(/,/, ".")))
  return (
    <div>
      <Airspeed speed={(airspeed + Math.random()) * 10 + 130} showBox={false} />
      <hr />
      <Altimeter
        altitude={parseFloat(altimeter.replace(/,/, ".")) * 1000}
        showBox={false}
      />
      <hr />
      <TurnCoordinator
        turn={(parseFloat(turnCoord.replace(/,/, ".")) - 0.5) * 1200}
        showBox={false}
      />
      {/* <hr />
      <HeadingIndicator heading={Math.random() * 360} showBox={false} />
      <AttitudeIndicator
        roll={(Math.random() - 0.5) * 120}
        pitch={(Math.random() - 0.5) * 40}
        showBox={false}
      />
      <Variometer vario={(Math.random() - 0.5) * 4000} showBox={false} /> */}
    </div>
  )
}

export default Welcome
