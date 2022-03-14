import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useAppContext } from "../context";
import { postReaction } from "../lib";
import { POST_REACTION } from "../actions";

const PostCard = ({ post }) => {
  const {
    appState: { userId },
    appDispatch,
  } = useAppContext();

  const handlePostLike = async (_post) => {
    try {
      appDispatch({
        type: POST_REACTION,
        payload: { id: _post._id, likers: [..._post.likers, userId] },
      });
      await postReaction({ userId, id: _post._id });
    } catch (error) {}
  };

  return (
    <MDBCard className="h-100">
      <MDBCardImage
        src={post.photo}
        position="top"
        style={{ maxHeight: 350, objectFit: "cover" }}
      />
      <MDBCardBody>
        <MDBCardTitle
          className="d-inline-block text-truncate"
          style={{ maxWidth: "100%" }}
        >
          {post.title}
        </MDBCardTitle>
        <MDBCardSubTitle
          style={{ maxWidth: "100%" }}
          className="d-inline-block text-truncate"
        >
          {post.content}
        </MDBCardSubTitle>
      </MDBCardBody>
      <MDBCardFooter>
        {post.likers.includes(userId) ? (
          <>
            {post.likers.length}
            <MDBIcon
              className="likeBtn"
              size="lg"
              fas
              icon="heart"
              color="danger"
            />
          </>
        ) : (
          <>
            {post.likers.length}
            <MDBIcon
              className="likeBtn"
              size="lg"
              far
              icon="heart"
              onClick={() => handlePostLike(post)}
            />
          </>
        )}
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PostCard;
