import { useState } from "react";

export default function NavItem({ icon, name, className, children }) {
  const [toggler, setToggler] = useState(false);

  return (
    <li className={className}>
      <div className="menu-item" onClick={() => setToggler(!toggler)}>
        <span className={toggler ? "active" : "not-active"}>{name}</span>
        <img
          src={icon}
          alt="arrow dark"
          className={toggler ? "active" : "not-active"}
        />
      </div>

      {toggler && <ul className="dropdown-list">{children}</ul>}
    </li>
  );
}
