import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

// Todo Sanatize Content

const RichText = ({ data }) => {
  return <div className="ck-content">{ReactHtmlParser(data)}</div>;
};

RichText.propTypes = {
  content: PropTypes.string,
};

export default RichText;
