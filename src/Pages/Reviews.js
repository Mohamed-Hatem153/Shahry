import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Reviews = ({ reviews, setReviews, newReview, setNewReview }) => {
  return (
    <div>
      <Navbar />
      <Header
        data={reviews}
        setReviews={setReviews}
        newReview={newReview}
        setNewReview={setNewReview}
      />
    </div>
  );
};

export default Reviews;
