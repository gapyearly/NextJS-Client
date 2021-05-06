import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// The number of columns change by resizing the window
class AltGallery extends React.Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 800: 2 }}>
        <Masonry>{this.props.children}</Masonry>
      </ResponsiveMasonry>
    );
  }
}
export default AltGallery;
