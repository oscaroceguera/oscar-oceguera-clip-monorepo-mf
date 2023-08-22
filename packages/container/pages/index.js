import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

const Marketing = dynamic(() => import("../components/MarketingApp"), {
  ssr: false,
});

function Home() {
  return (
    <div className={styles.container}>
      <h1>Container</h1>
      <Marketing />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  if (process.browser) {
    const page = (await import("../components/MarketingApp")).default;
    console.log("running get initial props client side");
    if (page.getInitialProps) {
      return page.getInitialProps(ctx);
    }
  }
  return {
    needsPush: true,
  };
};

export default Home;
