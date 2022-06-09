import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Headers, Rows } from "../../data"

const DataBoard = () => {
  return (
    <div className="App" style={{ height: 900 }}>
      <DataGrid
        rows={Rows}
        columns={Headers}
        pageSize={15}
        rowsPerPageOptions={[15]}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  )
}

export default DataBoard
