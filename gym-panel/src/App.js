import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './libs/layout/Header/Header';
import ClientsCo from './components/clients/ClientsCo';
import ClassCo from './components/classes/ClassesCo';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/classes' element={<ClassCo />} />
          <Route path='/clients' element={<ClientsCo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
