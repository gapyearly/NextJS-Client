import Connect from "./ConnectWindow";
import AskQuestion from "./AskQuestionWindow";
import Allmembers from "./AllMembers";

const pages = {
  connect: {
    title: "Gapyearly Connect",
    color: "red",
    component: Connect,
  },
  ask: {
    title: "Ask the community",
    color: "blue",
    component: AskQuestion,
  },
  allmembers: {
    title: "View all members",
    color: "green",
    component: Allmembers,
  },
};

export default pages;
