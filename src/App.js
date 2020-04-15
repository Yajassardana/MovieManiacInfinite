import React,{Component,Fragment} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import axios from 'axios'
import About from './Components/pages/about.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class App extends Component {
  state={
    users:[],
    loading:false,
  };
  async componentDidMount() {
    this.setState({loading:true});
     const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0c4c76bbf3416c3ab3fa77af77cd6cc8');
    this.setState({users:res.data.results,loading:false});
     console.log(res.data);
  }
  render() {
    const{users,loading,alert}=this.state;
      return (
        <Router>
          <div className = "App">
            <Navbar/>
            <div className="container">
            <Switch>
                <Route
               exact
               path='/'
               render={props => (
                 <Fragment>
                   <Users loading={loading} users={users} />
                 </Fragment>
               )}
             />
          <Route exact path='/about' component={About} />
      </Switch>
            </div>
          </div>
        </Router>
  );
  }
}

export default App;
