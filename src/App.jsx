
import { Routes, Route } from "react-router"
import Nav from "./components/Nav"
import GlobalPage from "./pages/GlobalPage"
import LocalPage from "./pages/LocalPage"
function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/" element={<GlobalPage />} />
        <Route path="/local" element={<LocalPage />} />
      </Routes>
    </>
  )

}

export default App
