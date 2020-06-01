import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost')
});

class Blog extends Component {
  state = {
    auth: true
  }


  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/posts/">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/" render={() => <h1>Home 2</h1>}/> */}
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}|
          <Route path="/posts" component={Posts}/>
          <Route component={() => <h1>Not Found</h1>} />
          {/* <Redirect from='/' to='posts' /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
