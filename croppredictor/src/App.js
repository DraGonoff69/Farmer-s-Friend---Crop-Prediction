import './App.css'
import CropPredictor from './components/CropPredictor'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
      
    <Router>
      <Routes>
        <Route exact path="/croppredictor" element={<CropPredictor/>} />
      </Routes>
    </Router>
  )
}
