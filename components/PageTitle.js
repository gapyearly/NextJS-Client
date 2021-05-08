import { NextSeo } from "next-seo";
export default function PageTitle({ title }) {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          type: "website",
          url: "https://www.gapyearly.com",
          site_name: "Gapyearly",
          images: [{ url: "/images/discover-your-direction.jpg" }],
          title: `${title} — Welcome to Gapyearly.`,
          description:
            "A free gap year guide written by gap year students. See what gap year students have done & plan a life-changing year with our gap year mentors.",
        }}
      />
      <header>
        <h1 className="header">{title}</h1>
      </header>
    </>
    // currently in global css, could pass in colours but ehhhhhhhhh low priority
  );
}
