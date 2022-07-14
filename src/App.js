
import './App.css';
import { Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import BlogScreen from './Screens/BlogScreen/BlogScreen';
import GithubPage from './Screens/GithubScreen/GithubFetchLogic';


function App() {
  return (
    <div>
      <Route Route path='/' exact>
        <HomeScreen />
      </Route>
      <Route Route path='/blog' >
        <BlogScreen />
      </Route>
      <Route path='/github'>
        <GithubPage />
      </Route>

    </div>
  )
}

export default App;
