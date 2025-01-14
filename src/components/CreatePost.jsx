import React, { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

function CreatePost() {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userId = userIdElement.current.value;
    userIdElement.current.value = "";

    const postTitle = postTitleElement.current.value;
    postTitleElement.current.value = "";

    const postBody = postBodyElement.current.value;
    postBodyElement.current.value = "";

    const reactions = reactionsElement.current.value;
    reactionsElement.current.value = "";

    const tags = tagsElement.current.value.split(" ");
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  }

  return (
    <>
      <form className="create-post mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Caption
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell more about it..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Likes
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many Likes"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Refrences' Name"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
