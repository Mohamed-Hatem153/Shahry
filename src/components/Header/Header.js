import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import UserReview from "../userReview/UserReview";
import { AiOutlineClose } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import classes from "./Header.module.css";

Modal.setAppElement("#root");

const Header = ({ data, setReviews, newReview, setNewReview }) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDetails, setReviewDetails] = useState("");
  const [modaleIsOpen, setModaleIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  useEffect(() => {
    const newRev = {
      ...newReview,
      reviewTitle: reviewTitle,
      reviewDetails: reviewDetails,
      rating: rating,
    };
    // console.log(newRev);

    setNewReview(newRev);
  }, [reviewTitle, reviewDetails, setNewReview]);
  const handleForm = (e) => {
    e.preventDefault();

    setReviews([...data, newReview]);
    console.log(data);
    setReviewTitle("");
    setReviewDetails("");
    setRating(0);
  };

  //   console.log(data);
  return (
    <div className={classes.hero}>
      <div className={classes.intro}>
        <h2>what our users say about shahry ?</h2>
        <button onClick={() => setModaleIsOpen(true)}>add a review</button>
        <Modal
          isOpen={modaleIsOpen}
          onRequestClose={() => setModaleIsOpen(false)}
          closeTimeoutMS={200}
        >
          <div className={classes.modalHead}>
            <h3>Add a Review</h3>
            <button onClick={() => setModaleIsOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div>
            <form onSubmit={handleForm} className={classes.form}>
              <label className={classes.star}>rating</label>
              <Rating onClick={handleRating} ratingValue={rating} />
              <div className={classes.formGroup}>
                <label>Review title</label>
                <input
                  type="text"
                  value={reviewTitle}
                  className={classes.reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                />
              </div>
              <div className={classes.formGroup}>
                <label>Review details</label>
                <input
                  type="text"
                  value={reviewDetails}
                  className={classes.reviewDetails}
                  onChange={(e) => setReviewDetails(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Add Review"
                onClick={() => setModaleIsOpen(false)}
                className={classes.btn}
              />
            </form>
          </div>
        </Modal>
      </div>
      <div>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <UserReview userData={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
