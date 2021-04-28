import Connect from "./ConnectWindow";
import AskQuestion from "./AskQuestionWindow";

const pages = {
  connect: {
    title: "Gapyearly Connect",
    component: Connect,
  },
  ask: {
    title: "Ask the community",
    component: AskQuestion,
  },
};

export default pages;
