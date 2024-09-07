// this form is used to create a new post and update an existing post

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../lib/features/postService";

const PostForm = ({ post, setSelectedPost, className }) => {
  const [title, setTitle] = useState(post ? post?.title : "");
  const [body, setBody] = useState(post ? post?.body : "");
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(post ? post?.title : "");
    setBody(post ? post?.body : "");
  }, [post]);


  const handleSave = () => {
    if (title.trim() === "" || body.trim() === "") {
      alert("Both title and body are required.");
      return;
    }

    if (post) {
      dispatch(updatePost({ id: post.id, title, body }));
    } else {
      dispatch(addPost({ title, body }));
    }

    //clearing the form.
    setTitle("");
    setBody("");
    setSelectedPost(null);
  };

  return (
    
        <div className={`row ${className}`}>
            <div className="col">
            <input
                type="text"
                className="form-control"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="col">
            <input
                type="text"
                className="form-control"
                placeholder="Post body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            </div>
            <div className="col">
            <button onClick={()=>handleSave()} className="btn btn-primary">
                {post ? "Update" : "Add"}
            </button>
            <button className="btn btn-danger mx-2" onClick={()=>setSelectedPost(null)} >Cancel</button>
            </div>
        </div>
  );
};

export default PostForm;
