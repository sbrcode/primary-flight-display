import { useState } from "react"
import "./App.css"
import Papa from "papaparse"

function App() {
  const [tableRows, setTableRows] = useState([])
  const [values, setValues] = useState([])

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = []
        const valuesArray = []

        results.data.map((d) => {
          rowsArray.push(Object.keys(d))
          return valuesArray.push(Object.values(d))
        })

        setTableRows(rowsArray[0])
        setValues(valuesArray)
      },
    })
  }

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
      {/* <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr key={index}>
              {value.map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default App

