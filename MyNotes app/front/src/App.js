
import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'

 
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <Header/>
      <Routes>
        <Route exact path='/' element={<NoteListPage/>} />   
        <Route path='notes/:id'   element={<NotePage />} />   

      </Routes>
    </div>
    </Router>
  );
}

export default App;
