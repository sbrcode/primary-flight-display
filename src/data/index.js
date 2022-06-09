import datas from "./FlightData.json"

datas.forEach((data, index) => (data["id"] = index))
export const Rows = datas

export const Headers = [
  { field: "RALT", headerName: "Radio Altitude", type: "number", width: 196 },
  { field: "ROLL", headerName: "Angle", type: "number", width: 196 },
  { field: "GS", headerName: "Ground Speed", type: "number", width: 196 },
  { field: "MH", headerName: "Magnetic Heading", type: "number", width: 196 },
  { field: "TH", headerName: "True Heading", type: "number", width: 196 },
  { field: "PTCH", headerName: "Pitch", type: "number", width: 196 },
]
