import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

// create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!!</h4>
        </div>
        Are you sure you wanna do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Sam"
          blogPost="Sam's first great blog post!"
          time="Today at 6pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="John"
          blogPost="Johns has a Great Greece post!"
          time="Today at 1am"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Sarah"
          blogPost="Sarah has a very cool post!"
          time="Today at 10pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// render JSX to the browser
ReactDOM.render(<App />, document.getElementById('root'));
