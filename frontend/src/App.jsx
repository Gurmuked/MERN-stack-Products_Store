import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Header"
import Homepage from "./Pages/Homepage"
import CreatePage from "./Pages/CreatePage"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
