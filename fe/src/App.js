import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

import SearchForm from './components/SearchForm';
import HomeScreen from './screens/HomeScreen';
import PageDetailScreen from './screens/PageDetailScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <Router>
      <header className='header__navbar'>
        <h3>Động vật quanh ta</h3>
        <SearchForm />
      </header>
      <main>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/detail' component={PageDetailScreen} />
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

function Search(){
  let {id} = useParams();
  return (
    <SearchScreen id={id}/>
  )
}

export default App;
