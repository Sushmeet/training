import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class PostList extends React.Component {
  componentDidMount() {
    console.log("props--- componentDidMount", this.props);
    this.props.fetchPosts();
  }

  renderList() {
    const listOfPosts = this.props.posts.map((post) => {
      console.log("post0----", post);
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
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

export default connect(mapStateToProps, { fetchPosts })(PostList);
