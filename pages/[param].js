import * as React from "react";

function Page(props) {
  console.log("Page", props);
  return <div>{JSON.stringify(props)}</div>;
}

export default Page;

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = () => {
  console.log("getStaticProps");
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};
