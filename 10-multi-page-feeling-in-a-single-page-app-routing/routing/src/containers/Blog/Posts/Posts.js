import React, { Component } from "react";
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost'

class Posts extends Component {

  state ={
    posts: []
  }

  componentWillMount () {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Gustavo'
          }
        })
        this.setState({posts: updatedPosts});
    })
    .catch(error => {
      this.setState({error: true})
    });
  }

  postSelectedHanlder = (id) => {
    this.props.history.push({pathname: '/posts/' + id});
  }

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something Went Wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            author={post.author}
            title={post.title}
            clicked={() => this.postSelectedHanlder(post.id)}/>
          );
      });
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    )
  }
}

export default Posts
