import { Fragment, useContext, useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import BlogScreen from './Screens/BlogScreen/BlogScreen';
import GithubPage from './Screens/GithubScreen/GithubFetchLogic';
import AboutPage from './Screens/AboutScreen/AboutPage';
import NavBar from './Components/NavBar';
import AppContext from './Store/Context';
import Loading from './Components/Loading';
import BlogEach from './Screens/BlogScreen/BlogEach';




function App() {

  const [load, setLoad] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  const appCtx = useContext(AppContext)

  return (
    <Router>
      {load ? <Fragment>
      {!appCtx.showNav &&  <Switch>
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

          <Route path='/details'>
            <BlogEach />
          </Route>
          <Redirect from="*" to="/comingsoon" />
        </Switch> }
      </Fragment> : <Loading />}
      
      {appCtx.showNav && <NavBar />}
    </Router>
  )
}

export default App;
