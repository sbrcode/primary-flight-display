import { DataGrid } from "@mui/x-data-grid"
import "./App.css"
import datas from "./data/FlightData.json"

const Headers = [
  { field: "RALT", headerName: "Radio Altitude", type: "number", width: 196 },
  { field: "ROLL", headerName: "Angle", type: "number", width: 196 },
  { field: "GS", headerName: "Ground Speed", type: "number", width: 196 },
  { field: "MH", headerName: "Magnetic Heading", type: "number", width: 196 },
  { field: "TH", headerName: "True Heading", type: "number", width: 196 },
  { field: "PTCH", headerName: "Pitch", type: "number", width: 196 },
]

datas.forEach((data, index) => (data["id"] = index))

const App = () => {
  const Rows = datas

  return (
    <div className="App" style={{ height: 900 }}>
      <DataGrid
        rows={Rows}
        columns={Headers}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
    </div>
  )
}

export default App

