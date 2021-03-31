import styles from "./Card.module.css";

import Link from "next/link";

export default function LinkCard ({source, title, desc, link}){
    return (
    <div>
        <p className={styles.source}>{source}</p>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link href={link}>
            <a className="noUnderline">Read more...</a>
        </Link>
    </div>
    );
}