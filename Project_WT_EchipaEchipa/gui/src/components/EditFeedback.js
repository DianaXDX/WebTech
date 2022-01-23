import { useEffect, useState } from "react";
import Feed from "./Feedback";
import { useHistory } from "react-router-dom";

export const EditFeedback = () => {
  const history = useHistory();

  const [feedback, setFeedback] = useState(0);

  useEffect(() => {
    Feed.getOneFeedback(global.selectedId);
    Feed.emitter.addListener("GET_ONEFEEDBACK_SUCCESS", () => {
      setFeedback(Feed.data);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const startPoint = e.target.start.value;
    const endPoint = e.target.end.value;
    const transport = e.target.transport.value;
    const departure = e.target.departure.value;
    const duration = e.target.duration.value;
    const crowd = e.target.crowd.value;
    const obs = e.target.obs.value;
    const sat = e.target.sat.value;

    const p = {
      startPoint: startPoint,
      destPoint: endPoint,
      transport: transport,
      departureH: departure,
      duration: duration,
      crowd: crowd,
      obs: obs,
      satisfaction: sat,
    };

    if (
      startPoint &&
      endPoint &&
      transport &&
      departure &&
      duration &&
      crowd &&
      obs &&
      sat
    ) {
      Feed.updateFeedback(global.selectedId, p);
      history.push("/myFeedbacks");
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <h2>Modify a new Feedback</h2>
      <form className="form" onSubmit={handleSave}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="start">Starting point</label>
              <input
                type="text"
                name="start"
                placeholder="Starting point"
                defaultValue={feedback.startPoint}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="end">Destination point</label>
              <input
                type="text"
                name="end"
                placeholder="Destination"
                defaultValue={feedback.destPoint}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="transport">Transportation method</label>
              <input
                type="text"
                name="transport"
                placeholder="Transportation method"
                defaultValue={feedback.transport}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="departure">Departure hour</label>
              <input
                type="text"
                name="departure"
                placeholder="Departure hour"
                defaultValue={feedback.departureH}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                defaultValue={feedback.duration}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="crowd">Crowdness</label>
              <input
                type="text"
                name="crowd"
                placeholder="Crowdness level"
                defaultValue={feedback.crowd}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="obs">Observations</label>
              <input
                type="text"
                name="obs"
                placeholder="Observations"
                defaultValue={feedback.obs}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="sat">Satisfaction level</label>
              <input
                type="text"
                name="sat"
                placeholder="Satisfaction"
                defaultValue={feedback.satisfaction}
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Save
        </button>
        <button
          className="btn"
          onClick={() => {
            history.push("/myFeedbacks");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
