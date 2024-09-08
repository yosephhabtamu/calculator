import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  fetchPosts,
  fetchSinglePost,
} from "../../lib/features/posts/postService";
import PostForm from "./postForm";
import CodePreview from "../snippetPreview/codePreview";

const PostsList = () => {
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = React.useState(null);
  const { posts, post, isLoading, loadingMessage, isError, errorMessage } =
    useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="px-4">
      {isLoading && <h6 className="text-center">{loadingMessage}</h6>}
      {isError && <h6 className="text-center">{errorMessage}</h6>}
      <div className="row my-4">
        <h1 className="col">Posts</h1>
        <p>
          {" "}
          This is a simple <mark>CRUD</mark> operation.(<strong>C</strong>reate,
          <strong>R</strong>ead, <strong>U</strong>pdate, <strong>D</strong>
          elete). The ui is styled with bootstrap. when new Item is created it
          is added to the list of items as the last item and displayed on the
          page.{" "}
        </p>
      </div>
      <PostForm
        className="my-4"
        post={selectedPost}
        setSelectedPost={(post) => setSelectedPost(post)}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">post title</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {posts?.map((postItem) => (
            <tr>
              <th scope="row">{postItem.id}</th>
              <td className="d-flex justify-content-between ">
                <a
                  onClick={() => dispatch(fetchSinglePost(postItem.id))}
                  className="link-offset-2 link-underline link-underline-opacity-0 link-opacity-75 link-opacity-100-hover"
                >
                  {" "}
                  {postItem.title}{" "}
                </a>
                {/* action button container */}
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedPost(postItem)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => dispatch(deletePost(postItem))}
                  >
                    delete
                  </button>
                </div>
              </td>
              {post && post.id === postItem.id && (
                <div className="container mt-3">
                  <h5 className="mb-3">Single post Details</h5>
                  <pre className="bg-light p-3 rounded border">
                    <code className="text-dark">
                      {JSON.stringify(post, null, 2)}
                    </code>
                  </pre>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container" style={{marginTop:"3rem"}}>
        <h6>post form code</h6>
        <CodePreview path="src/Components/posts/postForm.jsx" />
        <h6>post list code</h6>
        <CodePreview path="src/Components/posts/postsList.jsx" />
        <h6>slice code</h6>
        <CodePreview path="src/lib/features/posts/postService.js" />
        <h6>store code</h6>
        <CodePreview path="src/lib/store.js" />
      </div>
    </div>
  );
};

export default PostsList;
