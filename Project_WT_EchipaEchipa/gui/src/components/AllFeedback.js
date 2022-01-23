import { useEffect, useState } from "react";
import FeedbackList from "./FeedbackList";
import Feed from "./Feedback";
import { useHistory } from "react-router-dom";

export const AllFeedback = () => {
  const history = useHistory();
  console.log(global.userId);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    Feed.getFeedback();
    Feed.emitter.addListener("GET_FEEDBACK_SUCCESS", () => {
      setFeedback(Feed.data);
    });
  }, []);

  const handleMyFeedback = () => {
    history.push("/myFeedbacks");
  };

  return (
    <div className="myFeedback">
      <button
        className="btn"
        onClick={() => {
          history.push("/login");
        }}
      >
        Log out
      </button>
      <h1>All Feedback</h1>
      <div className="home">
        <button className="btn" onClick={handleMyFeedback}>
          My feedback
        </button>
        <FeedbackList feedbacks={feedback} all={true} />
      </div>
    </div>
  );
};
