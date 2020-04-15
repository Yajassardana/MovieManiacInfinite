import React,{Component,Fragment} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import axios from 'axios'
import About from './Components/pages/about.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Components/Layout/Loader.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class App extends Component {
  state={
    users:[],
    loading:false,
    pageCount:2
  };
  fetchMoreData = async () => {
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0c4c76bbf3416c3ab3fa77af77cd6cc8&page=${this.state.pageCount}`).then((res)=>{
        this.setState({
          users: this.state.users.concat(res.data.results),
          pageCount:this.state.pageCount+1
        });
      });

    }, 1500);
  };
  async componentDidMount() {
    this.setState({loading:true});
    const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0c4c76bbf3416c3ab3fa77af77cd6cc8');
    this.setState({users:res.data.results,loading:false});
    console.log(res.data);
  }
  render() {
    const{users,loading}=this.state;
    return (
      <Router>
        <div className = "App">
          <Navbar/>
          <div className="container">
                <Switch>
                    <Users loading={loading} users={users} />
                      <Route
                     exact
                     path='/'
                     render={props => (
                       <Fragment>
                         <Users
                           loading={loading}
                           users={users} />
                       </Fragment>
                     )}
                   />
                    <Route exact path='/about' component={About} />
                  </Switch>
                  <InfiniteScroll
                    dataLength={users.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Loader/>}
                    endMessage={
                      <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b> </p>}
                          />
                </div>
              </div>
            </Router>
          );
        }
      }

export default App;
