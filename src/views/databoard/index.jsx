import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Headers, Rows } from "../../data"
import "../../index.css"

const DataBoard = () => (
  <div className="databoard">
    <DataGrid
      rows={Rows}
      columns={Headers}
      pageSize={15}
      rowsPerPageOptions={[15]}
      checkboxSelection
      components={{
        Toolbar: GridToolbar,
      }}
    />
  </div>
)

export default DataBoard
