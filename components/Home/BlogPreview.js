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
    <Link href={`/blog/${slug}`}>
      <div className={styles.blogPreviewContainer}>
        <img src={image.url} alt={image.alt} />
        <div className={styles.previewText}>
          <a className="noUnderline">
            <h3>{title}</h3>
          </a>

          <p>
            by{" "}
            {name.user ? (
              <Link href={`/${profile}`}>
                <a className="blueUnderline">{name.name}</a>
              </Link>
            ) : (
              <span>{name.name}</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
