import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LinkCard from "./LinkCard";

// The number of columns change by resizing the window
class LinkGallery extends React.Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 600: 2, 750: 3 }}>
        <Masonry>{this.props.children}</Masonry>
      </ResponsiveMasonry>
    );
  }
}
export default LinkGallery;
