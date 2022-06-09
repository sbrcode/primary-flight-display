import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DataBoard from "./views/databoard"
import Welcome from "./views/welcome"
import Header from "./components/header"
import Error from "./components/error"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/databoard" element={<DataBoard />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

