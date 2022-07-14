
import './App.css';
import { Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import { Link } from 'react-router-dom';
import BlogScreen from './Screens/BlogScreen/BlogScreen';

function App() {
  return (
    <div>
      <Route Route path='/' exact>
        <HomeScreen />
      </Route>
      <Route Route path='/blog' >
        <BlogScreen />
      </Route>

    </div>
  )
}

export default App;
