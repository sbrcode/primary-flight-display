import { useState, useEffect } from "react"
import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
} from "react-typescript-flight-indicators"
import { Rows } from "../../data"

const Welcome = () => {
  const [airspeed, setAirSpeed] = useState(Rows[0].GS)
  const [altimeter, setAltimeter] = useState(Rows[0].RALT)
  const [angle, setAngle] = useState(Rows[0].ROLL)
  const [heading, setHeading] = useState(Rows[0].TH)
  const [pitch, setPitch] = useState(Rows[0].PTCH)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 100)
    setAirSpeed(Rows[index].GS)
    setAltimeter(Rows[index].RALT)
    setHeading(Rows[index].TH)
    setAngle(Rows[index].ROLL)
    setPitch(Rows[index].PTCH)
    return () => clearInterval(intervalId)
  }, [index])

  const digitize = (param) => parseFloat(param.replace(/,/, "."))

  return (
    <>
      <div className="row">
        <div className="column">
          <Airspeed
            speed={
              airspeed === "0"
                ? Math.random()
                : digitize(airspeed) / 2 / 1.609344
            }
            showBox={false}
          />
          <div className="text">
            <div>Air Speed:</div>
            <div className="subText">{digitize(airspeed)}</div>
          </div>
        </div>
        <div className="column">
          <Altimeter altitude={digitize(altimeter) * 10} showBox={false} />
          <div className="text">
            <div>Radio Altitude:</div>
            <div className="subText">{digitize(altimeter)}</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <HeadingIndicator heading={digitize(heading)} showBox={false} />
          <div className="text">
            <div>Heading:</div>
            <div className="subText">{digitize(heading)}</div>
          </div>
        </div>
        <div className="column">
          <AttitudeIndicator
            roll={digitize(angle) * 4}
            pitch={digitize(pitch) * 10}
            showBox={false}
          />
          <div className="text">
            <div>Angle:</div>
            <div className="subText">{digitize(angle)}</div>
            <div>Pitch:</div>
            <div className="subText">{digitize(pitch)}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
