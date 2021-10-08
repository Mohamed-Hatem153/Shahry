import React, { useState } from "react";
import { RatingView } from "react-simple-star-rating";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import classes from "./UserReview.module.css";

const UserReview = ({ userData }) => {
  const [comment, setComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [commentIsVisibile, setCommentIsVisibile] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCommentContent("");
    setComment(false);
    setCommentIsVisibile(true);
  };
  return (
    <div className={classes.review}>
      <img src={userData.userImg} alt="userImg" />
      <h4>{userData.userName}</h4>
      <p className={classes.date}>{userData.Date}</p>
      <h3>{userData.reviewTitle}</h3>
      <div className={classes.rating}>
        {userData.rating >= 4 ? (
          <span className={classes.up}>{<FaThumbsUp />}</span>
        ) : (
          <span className={classes.down}>{<FaThumbsDown />}</span>
        )}
        <RatingView ratingValue={userData.rating} size={25} />
        <span className={classes.ratNum}>{`${userData.rating}/5`}</span>
      </div>

      <p className={classes.revDet}>{userData.reviewDetails}</p>
      {commentIsVisibile ? (
        <div className={classes.commentContent}>
          <p>{commentContent}</p>
          <img
            src={`https://randomuser.me/api/portraits/men/5.jpg`}
            alt="commentUserImage"
            className={classes.commentImg}
          />
        </div>
      ) : null}
      {comment ? (
        <div className={classes.comment}>
          <form onSubmit={handleSubmit}>
            <label>Add Comment</label>
            <input
              type="text"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
            <button type="submit">add comment</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setComment(true)} type="button">
          add comment
        </button>
      )}
    </div>
  );
};

export default UserReview;
