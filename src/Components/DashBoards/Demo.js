import React, { useEffect, useState } from "react";

const Demo = () => {
  console.log("hello");
  const [timer, settimer] = useState(0);
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/users.json?key=79b21ba0")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <button onClick={() => settimer(timer + 1)}> + </button>&nbsp;
      <span>{timer}</span>&nbsp;
      <button onClick={() => settimer(timer - 1)}> - </button>
    </div>
  );
};

export default Demo;
