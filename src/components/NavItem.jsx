import { useState } from "react";

export default function NavItem({
  icon,
  name,
  listItem1,
  listItem2,
  listItem3,
  className,
}) {
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

      {toggler && (
        <ul className="dropdown-list">
          <li>
            <a href="/#" className="dropdown-list__link">
              {listItem1}
            </a>
          </li>
          <li>
            <a href="/#" className="dropdown-list__link">
              {listItem2}
            </a>
          </li>
          <li>
            <a href="/#" className="dropdown-list__link">
              {listItem3}
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
