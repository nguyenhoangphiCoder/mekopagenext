import { API } from "../constants/api";

export const FeedbackApi = {
  createFeedback: (data: any) => {
    return API.post("feedback", data);
  },
};
