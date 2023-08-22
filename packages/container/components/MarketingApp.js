import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      initialPath: "/shop",
      onNavigate: (f) => f,
    });

    // history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
