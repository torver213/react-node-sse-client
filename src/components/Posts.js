import React from "react";
import { MDBRow, MDBCol, MDBSpinner } from "mdb-react-ui-kit";
import { useAppContext } from "../context";
import PostCard from "./PostCard";

const Posts = () => {
  const {
    appState: { posts, isError, isLoading },
  } = useAppContext();
  if (isLoading) {
    return (
      <div className="verticalCenter">
        <MDBSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-block text-center">
        <h1>Sorry an error occurred trying to fetch posts</h1>
      </div>
    );
  }
  if (posts.length === 0) {
    <div className="d-block text-center">
      <h1>No posts yet, please click the button at the top to add</h1>
    </div>;
  }
  return (
    <MDBRow>
      {posts.map((p) => (
        <MDBCol className="mb-2" key={p._id} lg="3">
          <PostCard post={p} />
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default Posts;
