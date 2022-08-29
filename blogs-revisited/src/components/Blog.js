import { useState } from "react";
import { Button } from "react-bootstrap";

const Blog = ({ blog, handleDelete, user, likeBlog }) => {
  const [showAll, setShowAll] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const likeStyle = {
    backgroundColor: "lime",
  };

  const deleteStyle = {
    backgroundColor: "salmon",
  };

  return (
    <div>
      {showAll === false ? (
        <div>
          Content: {blog.title}{" "}
          <Button
            variant="secondary"
            type="show"
            onClick={() => setShowAll(!showAll)}
          >
            view
          </Button>
        </div>
      ) : (
        <div>
          Content: {blog.title}
          <div></div>
          Author: {blog.author}
          <div></div>
          Url: {blog.url}
          <div></div>
          Likes: {blog.likes}{" "}
          <Button
            variant="outline-success"
            type="like"
            value={blog.id}
            name={blog.author}
            title={blog.likes}
            onClick={likeBlog}
          >
            like
          </Button>
          <div></div>
          <Button
            variant="outline-secondary"
            type="show"
            onClick={() => setShowAll(!showAll)}
          >
            hide post
          </Button>
          <div></div>
          {!user || user.name !== blog.user.name ? (
            <div></div>
          ) : (
            <Button
              variant="danger"
              type="delete"
              style={deleteStyle}
              value={blog.id}
              onClick={handleDelete}
            >
              delete post
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
