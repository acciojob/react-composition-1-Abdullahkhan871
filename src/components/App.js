import React from "react";
import "./../styles/App.css";
import Tabs from "./Tabs";

const App = () => {
  const tabs = [
    {
      title: "Tab 1",
      content: "This is the content for ",
    },
    {
      title: "Tab 2",
      content: "This is the content for ",
    },
    {
      title: "Tab 3",
      content: "This is the content for ",
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
