import styles from "./Preview.module.css";
import Link from "next/link";

export default function BlogPreview({ blogData }) {
  const {
    title,
    description,
    slug,
    image,
    author,
    profile,
    submittedBy,
  } = blogData;
  const name = {};
  if (author) {
    name.name = `${author.firstName} ${author.lastName}`;
    name.user = true;
  } else {
    name.name = submittedBy;
    name.user = false;
  }

  return (
    <div className={styles.blogPreviewContainer}>
      <img src={image.url} alt={image.alt} />
      <div className={styles.previewText}>
        <h3>{title}</h3>
        <h4>By {name.name}</h4>
      </div>

      <Link href={`/blog/${slug}`}>
        <a className="noUnderline">
          <h3>{title}</h3>
        </a>
      </Link>
      <div>
        By{" "}
        {name.user ? (
          <Link href={`/${profile}`}>
            <a>{name.name}</a>
          </Link>
        ) : (
          <a>{name.name}</a>
        )}
      </div>
    </div>
  );
}
