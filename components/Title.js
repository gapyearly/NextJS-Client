import Head from "next/head";
export default function Title({ children }) {
  return <title>{`${children}`}</title>;
}
