import Layout from "@components/Layouts/Layout";
import ReactHtmlParser from "react-html-parser";
import styles from "styles/Accordion.module.css";
import PageTitle from "@components/PageTitle";
import strapi from "@api/strapi";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FAQ({ data }) {
  console.log(data);
  return (
    <>
      <PageTitle>FAQs</PageTitle>
      <Layout>
        <Accordion
          className={styles.accordion}
          allowMultipleExpanded
          allowZeroExpanded
        >
          {data.map((item) => (
            <AccordionItem
              className={styles.accordion__item}
              key={item.question}
            >
              <AccordionItemHeading
                className={styles.accordion__heading}
                aria-level="2"
              >
                <AccordionItemButton className={styles.accordion__button}>
                  {item.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordion__panel}>
                {ReactHtmlParser(item.answer)}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("questions");
  return {
    props: {
      data,
    },
  };
}
