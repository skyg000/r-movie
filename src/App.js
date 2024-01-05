import './App.scss';
import "swiper/css";
import List from './page/List';
import Detail from './page/Detail';
import Home from './page/Home';
import {Link,HashRouter, Routes,Route} from 'react-router-dom';
function App() {
  
  
  

  return (
    <HashRouter>
      <article className='m'>
        <header>
          <article className='head'>
            <article className='logo'>
              <a href='/'><h2> HFLIX</h2></a>
            </article>
              <nav className='menu'>
                <Link to="/"> Home </Link>
                <Link to="/movie"> Movie </Link>
                <Link to="/tv"> TV </Link>
              </nav>
          </article>
          
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:type' element={<List />}/>
            <Route path='/:type/:id' element={<Detail />}/>
            <Route path='/:type/:search/:keyword' element={<search/>}/>
          </Routes>
        </main>
        </header>
      </article>
    </HashRouter>
  );
}
/* useparams  */
export default App;
