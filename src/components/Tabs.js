import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [vlv, setVlv] = useState(tabs[0].title);
  return (
    <div>
      <ul>
        {tabs.map((item) => (
          <li onClick={() => setVlv(item.title)}>{item.title}</li>
        ))}
      </ul>
      {
        <p>
          {tabs[0].content}
          {vlv}.
        </p>
      }
    </div>
  );
};

export default Tabs;

// Dynamic Content Display: Instead of hardcoding {tabs[0].content}{vlv}, filter the tab based on the active tab title and show its content.
