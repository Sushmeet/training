import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions/index";
import User from "./User"

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  renderList() {
    const listOfPosts = this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <User userId={post.userId}/>
          <hr></hr>
        </div>
      );
    });
    return listOfPosts;
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);
