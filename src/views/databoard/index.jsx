import { DataGrid } from "@mui/x-data-grid"
import { Headers, Rows } from "../../data"

const DataBoard = () => (
  <div className="App" style={{ height: 900 }}>
    <DataGrid
      rows={Rows}
      columns={Headers}
      pageSize={15}
      rowsPerPageOptions={[15]}
    />
  </div>
)

export default DataBoard
