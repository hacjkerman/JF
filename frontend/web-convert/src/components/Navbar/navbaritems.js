import React from "react";

function Navbaritems(item) {
  return (
    <li>
      <a href={item.page}>{item.name}</a>
    </li>
  );
}

export default Navbaritems;
