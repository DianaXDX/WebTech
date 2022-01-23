import { EventEmitter } from "fbemitter";

const SERVER = "http://localhost:8080/feedback";

class Feedback {
  constructor() {
    this.data = [];
    this.emitter = new EventEmitter();
  }

  async getFeedback() {
    const response = await fetch(SERVER);

    this.data = await response.json();

    this.emitter.emit("GET_FEEDBACK_SUCCESS");
  }

  async getOneFeedback(id) {
    const response = await fetch(SERVER + "/" + id);

    this.data = await response.json();

    this.emitter.emit("GET_ONEFEEDBACK_SUCCESS");
  }

  async getUserFeedback(id) {
    const response = await fetch(SERVER + "/user/" + id);

    this.data = await response.json();

    this.emitter.emit("GET_MYFEEDBACK_SUCCESS");
  }

  async addFeedback(feedback) {
    const response = await fetch(SERVER, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(feedback),
    });
    this.getFeedback();
  }

  async updateFeedback(id, feedback) {
    const response = await fetch(SERVER + "/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(feedback),
    });
    this.getFeedback();
  }

  async deleteFeedback(id) {
    const response = await fetch(SERVER + "/" + id, {
      method: "DELETE",
    });
    this.getFeedback();
  }
}

const Feed = new Feedback();

export default Feed;
