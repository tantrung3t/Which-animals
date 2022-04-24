import './App.css';

import { BrowserRouter as Router,Route, useParams} from 'react-router-dom'

import SearchForm from './components/SearchForm';
import HomeScreen from './screens/HomeScreen';
import PageDetailScreen from './screens/PageDetailScreen';
import SearchScreen from './screens/SearchScreen';
import NganhScreen from './screens/NganhScreen';
import BoScreen from './screens/BoScreen';
import LopScreen from './screens/LopScreen';

function App() {
  return (
    <Router>
      <header className='header__navbar'>
        <h3>Động vật quanh ta</h3>
        <SearchForm />
      </header>
      <main>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/detail/:id' component={PageDetail} />
        <Route path='/nganh/:id' component={Nganh} />
        <Route path='/lop/:id' component={Lop} />
        <Route path='/bo/:id' component={Bo} />
        <Route path='/search/:id' component={Search} />
        
      </main>
      {/* <footer>
        <div>
          <p className='footer_p'>Động vật quanh ta @2022</p>
        </div>
      </footer> */}
    </Router>


  );
}

function PageDetail(){
  let {id} = useParams();
  return(
    <PageDetailScreen id={id} />
  )
}
function Nganh(){
  let {id} = useParams();
  return (
    <NganhScreen id={id}/>
  )
}
function Lop(){
  let {id} = useParams();
  return (
    <LopScreen id={id}/>
  )
}
function Bo(){
  let {id} = useParams();
  return (
    <BoScreen id={id}/>
  )
}
function Search(){
  let {id} = useParams();
  return (
    <SearchScreen id={id}/>
  )
}


export default App;
