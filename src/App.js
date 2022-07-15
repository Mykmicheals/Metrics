
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import BlogScreen from './Screens/BlogScreen/BlogScreen';
import GithubPage from './Screens/GithubScreen/GithubFetchLogic';
import AboutPage from './Screens/AboutScreen/AboutPage';
import { useHistory } from 'react-router-dom'




function App() {
 var history = useHistory()

  // useEffect(() => {
  //   history.push('/comingsoon')
  // }, [history])

  return (
    <Router>
      <Switch>
      <Route path='/comingsoon' exact>
        <HomeScreen />
      </Route>
      <Route Route path='/blog' >
        <BlogScreen />
      </Route>
      <Route path='/github'>
        <GithubPage />
      </Route>
      <Route path='/about'>
      <AboutPage />
      </Route>
        <Redirect from="*" to="/comingsoon" />
      </Switch>
    </Router>
  )
}

export default App;
