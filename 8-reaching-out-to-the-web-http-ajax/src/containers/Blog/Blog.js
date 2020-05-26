import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  state ={
    posts: [],
    selectedPostsId: null,
    error: false,
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
    this.setState({selectedPostsId: id})
  }

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something Went Wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          author={post.author}
          title={post.title}
          clicked={() => this.postSelectedHanlder(post.id)}/>
      });
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostsId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
