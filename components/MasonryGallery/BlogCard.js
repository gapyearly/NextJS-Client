/**
 * Used in /blog gallery page.
 */
import styles from "./BlogCard.module.css";

import Link from "next/link";
/**
 * Paremters for a blogcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function BlogCard({ data, align }) {
  const {
    title,
    description,
    slug,
    image,
    author,
    profile,
    submittedBy,
  } = data;
  const name = {};
  if (author) {
    name.name = `${author.firstName} ${author.lastName}`;
    name.user = true;
  } else {
    name.name = submittedBy;
    name.user = false;
  }
  console.log(author);
  // TODO Fix up structure and styling
  const BlogCardInfo = ({ className }) => {
    return (
      <div className={className}>
        <Link href={`/blog/${slug}`}>
          <a className="noUnderline">
            <h2>{title}</h2>
          </a>
        </Link>
        <div>
          By{" "}
          {name.user ? (
            <Link href={`/${profile}`}>
              <a>{name.name}</a>
            </Link>
          ) : (
            <span>{name.name}</span>
          )}
        </div>
        <p>{description}</p>
      </div>
    );
  };

  const Image = () => {
    return <img src={image.url} alt={image.alt} />;
  };

  const content =
    align === "left" ? (
      <>
        <Image />
        <BlogCardInfo className={styles.blogTextLeft} align={align} />
      </>
    ) : (
      <>
        <BlogCardInfo
          className={`${styles.blogTextRight} ${styles.blogTextLeft}`}
          align={align}
        />
        <Image />
      </>
    );

  return <div className={styles.blogContainer}>{content}</div>;
}
