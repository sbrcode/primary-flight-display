import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import "./App.css"
import datas from "./data/FlightDataMin.json"
import { Headers } from "./utils/Constants"

const App = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Headers &&
              Headers.map((title, index) => (
                <TableCell key={index} align="right">
                  {title}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.RALT}
              </TableCell>
              <TableCell align="right">{data.ROLL}</TableCell>
              <TableCell align="right">{data.GS}</TableCell>
              <TableCell align="right">{data.MH}</TableCell>
              <TableCell align="right">{data.TH}</TableCell>
              <TableCell align="right">{data.PTCH}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default App

