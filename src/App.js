import React, { useState, useEffect } from "react";
import Reviews from "./Pages/Reviews";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [randomPerson, setRandomPerson] = useState(null);
  const [reviews, setReviews] = useState([
    {
      id: uuidv4(),
      userImg: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
      userName: "Ahmed Ibrahim",
      Date: new Date().toDateString(),
      reviewTitle: "Best App ever!",
      rating: 4,
      reviewDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: uuidv4(),
      userImg: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
      userName: "Mohamed Hossam",
      Date: new Date().toDateString(),
      reviewTitle: "Bad Experience!",
      rating: 1,
      reviewDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);
  const [newReview, setNewReview] = useState(null);
  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const person = data.results[0];
      // console.log(person);
      const personInfo = {
        id: uuidv4(),
        userImg: person.picture.large,
        userName: `${person.name.first} ${person.name.last}`,
        Date: new Date().toDateString(),
        rating: 4,
      };
      setNewReview(personInfo);
      // console.log(personInfo);
    };
    getPerson();
  }, [reviews]);
  return (
    <div className="App">
      <Reviews
        reviews={reviews}
        setReviews={setReviews}
        newReview={newReview}
        setNewReview={setNewReview}
      />
    </div>
  );
}

export default App;
