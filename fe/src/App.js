import './App.css';

import { BrowserRouter as Router,Route, useParams, Link} from 'react-router-dom'

import SearchForm from './components/SearchForm';
import HomeScreen from './screens/HomeScreen';
import PageDetailScreen from './screens/PageDetailScreen';
import SearchScreen from './screens/SearchScreen';
import NganhScreen from './screens/NganhScreen';
import BoScreen from './screens/BoScreen';
import LopScreen from './screens/LopScreen';
import AdminScreen from './screens/AdminScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <Router>
      <header className='header__navbar'>
        <Link className='home' to='/'>Động vật quanh ta</Link>
        <SearchForm />
      </header>
      <main>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/detail/:id' component={PageDetail} />
        <Route path='/nganh/:id' component={Nganh} />
        <Route path='/lop/:id' component={Lop} />
        <Route path='/bo/:id' component={Bo} />
        <Route path='/search/:id' component={Search} />
        <Route path='/admin' render={() => {
            return (localStorage.getItem('user') === "admin") ? <AdminScreen /> : <SigninScreen />
          }}/>
        
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
