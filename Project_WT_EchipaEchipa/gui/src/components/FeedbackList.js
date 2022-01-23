const FeedbackList = ({ feedbacks, handleDelete, handleEdit, all }) => {
  return (
    <div className="feedback-list">
      {feedbacks.map((feed) => (
        <div className="feedback-preview" key={feed.id}>
          <div className="textHolder">
            <h2>
              {feed.startPoint} -- {feed.destPoint}
            </h2>
            <h2>Transportation: {feed.transport}</h2>
            <h2>Departure hour: {feed.departureH}</h2>
            <h2>Trip duration:{feed.duration}</h2>
            <p>Crowdness: {feed.crowd}</p>
            <p>Observations: {feed.obs}</p>
            <p>Satisfaction lavel: {feed.satisfaction}</p>
          </div>
          {!all && (
            <div className="buttonHolder">
              <button className="btn" onClick={() => handleEdit(feed.id)}>
                Edit
              </button>
              <button className="btn2" onClick={() => handleDelete(feed.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
