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
  const { title, description, slug, image, author, profile } = data;
  const fullName = `${author.personalInfo.firstName} ${author.personalInfo.lastName}`;
  // TODO Fix up structure and styling
  const BlogCardInfo = ({ className }) => {
    return (
      <div className={styles.blogText}>
        <Link href={`/blog/${slug}`}>
          <h2 className={className}>{title}</h2>
        </Link>
        <Link href={`/${profile}`}>
          <a className={className}>By: {fullName}</a>
        </Link>
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
        <BlogCardInfo />
      </>
    ) : (
      <>
        <BlogCardInfo className={styles.blogTextRight} />
        <Image />
      </>
    );

  return <div className={styles.blogContainer}>{content}</div>;
}
