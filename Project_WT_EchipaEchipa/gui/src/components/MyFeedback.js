import { useEffect, useState } from "react";
import FeedbackList from "./FeedbackList";
import Feed from "./Feedback";
import { useHistory } from "react-router-dom";

export const MyFeedback = () => {
  const history = useHistory();
  console.log(global.userId);
  global.selectedId = -1;
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    Feed.getUserFeedback(global.userId);
    Feed.emitter.addListener("GET_MYFEEDBACK_SUCCESS", () => {
      setFeedback(Feed.data);
    });
  }, []);

  const handleDelete = (id) => {
    Feed.deleteFeedback(id);
    Feed.getFeedback();
  };

  const handleAddFeedback = () => {
    history.push("/addfeedback");
  };

  const handleAllFeedback = () => {
    history.push("/allfeedback");
  };

  const handleEditFeedback = (id) => {
    global.selectedId = id;
    history.push("/editfeedback");
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
      <h1>My Feedback</h1>
      <div className="home">
        <button className="btn" onClick={handleAddFeedback}>
          Add feedback
        </button>
        <button className="btn" onClick={handleAllFeedback}>
          See all feedback
        </button>
        <FeedbackList
          feedbacks={feedback}
          handleDelete={handleDelete}
          handleEdit={handleEditFeedback}
          all={false}
        />
      </div>
    </div>
  );
};
