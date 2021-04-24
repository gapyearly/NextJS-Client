export default function PreviewGallery {
    return (
        <>
        <div className={"card"}>
        <img
          className={"cardImg"}
          src="/images/placeholder.jpg"
          alt=""
        ></img>
        <div className={"cardDesc"}>
          <h3>Blog Title</h3>
          <p>Author Name</p>
        </div>
      </div>
</>
    );
}