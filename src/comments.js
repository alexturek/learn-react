var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm here
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div classname="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
