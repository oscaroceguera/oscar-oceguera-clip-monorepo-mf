import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      initialPath: "/shop",
      onNavigate: () => {},
    });

    // history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
