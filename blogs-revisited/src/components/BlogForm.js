import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleBlogChange = (event) => {
    setNewBlog(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value);
  };

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title: newBlog,
      author: newAuthor,
      url: newUrl,
    });

    setNewAuthor("");
    setNewUrl("");
    setNewBlog("");
  };

  return (
    <div>
      <h2>Create a new blog</h2>

      <Form onSubmit={addBlog}>
        <Form.Group>
          <Form.Label>Blog content: </Form.Label>
          <Form.Control
            type="text"
            name="content"
            id="content"
            value={newBlog}
            onChange={handleBlogChange}
          />
          <Form.Label>author: </Form.Label>
          <Form.Control
            type="text"
            name="author"
            id="author"
            value={newAuthor}
            onChange={handleAuthorChange}
          />
          <Form.Label>url:</Form.Label>
          <Form.Control
            type="text"
            name="url"
            id="url"
            value={newUrl}
            onChange={handleUrlChange}
          />
        </Form.Group>

        <div>
          <Button variant="success" type="submit">
            save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BlogForm;
