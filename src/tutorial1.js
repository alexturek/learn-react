var CommentBox = React.createClass({
  render: function() {
    return (
      <div classname="commentBox">
        Hello, world! I am a commentbox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
