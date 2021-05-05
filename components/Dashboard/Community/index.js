import Connect from "./ConnectWindow";
import AskQuestion from "./AskQuestionWindow";
import Allmembers from "./AllMembers";

const pages = {
  connect: {
    title: "Gapyearly Connect",
    component: Connect,
  },
  ask: {
    title: "Ask the community",
    component: AskQuestion,
  },
  allmembers: {
    title: "View all members",
    component: Allmembers,
  },
};

export default pages;
