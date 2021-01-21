import React from 'react';
// import faker from 'faker';

const CommentDetail = ({ authorName, blogPost, time, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{blogPost}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
