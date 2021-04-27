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
  // TODO Fix up structure and styling
  const BlogCardInfo = ({ className, align }) => {
    return (
      <div className={styles.blogText}>
        <Link href={`/blog/${slug}`}>
          <a className="noUnderline">
            <h2 className={className}>{title}</h2>
          </a>
        </Link>
        <div className={align === "right" ? styles.blogUserLink : ""}>
          {name.user ? (
            <Link href={`/${profile}`}>
              <a className={className}>By: {name.name}</a>
            </Link>
          ) : (
            <a className={className}>By: {name.name}</a>
          )}
        </div>
        <p className={className}>{description}</p>
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
        <BlogCardInfo align={align} />
      </>
    ) : (
      <>
        <BlogCardInfo className={styles.blogTextRight} align={align} />
        <Image />
      </>
    );

  return <div className={styles.blogContainer}>{content}</div>;
}
