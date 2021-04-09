import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FactsAndFigures({ data }) {
  return (
    <Accordion allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.uuid}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("facts-and-figures");
  return {
    props: {
      data,
    },
  };
}
