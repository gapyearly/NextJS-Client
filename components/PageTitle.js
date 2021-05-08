import { NextSeo } from "next-seo";
export default function PageTitle({ title }) {
  return (
    <>
      <NextSeo title={title} opengraph={{ title: `${title} | Gapyearly` }} />
      <header>
        <h1 className="header">{title}</h1>
      </header>
    </>
    // currently in global css, could pass in colours but ehhhhhhhhh low priority
  );
}
