import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Container from './componentes/layout/Container';
import Navbar from './componentes/layout/Navbar';
import Home from './componentes/paginas/Home';
import Projetos from './componentes/paginas/projetos';
import Empresa from './componentes/paginas/empresa';
import Contatos from './componentes/paginas/contatos';
import Footer from './componentes/layout/Footer';


// para iniciar o react na web npm start 
// para ligar o nosso beckand tem que colocar npm run backend 



function App() {
  return (
     <Router>
       <Navbar/>
       <Container>
         <Routes>
         <Route path='/' exact='true' element = {<Home/>}></Route>
         <Route path='/projetos' element={<Projetos/>}></Route>
         <Route path= '/empresa' element ={<Empresa/>}></Route>
         <Route path = '/contatos' element ={<Contatos/>}></Route>
       </Routes>
       </Container>
       <Footer/>
     </Router>
  );
}

export default App;
