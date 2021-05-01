import styles from "./Preview.module.css";
import Link from "next/link";

export default function BlogPreview({ data }) {
  const { title, slug, image, author, profile, submittedBy } = data;
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
        <Link href={`/blog/${slug}`}>
          <a className="noUnderline">
            <h3>{title}</h3>
          </a>
        </Link>
        <p>
          By{" "}
          {name.user ? (
            <Link href={`/${profile}`} color="blueUnderline">
              <a>{name.name}</a>
            </Link>
          ) : (
            <a>{name.name}</a>
          )}
        </p>
      </div>
    </div>
  );
}
