export default function DropdownListItem({ listItem }) {
  return (
    <li>
      <a href="/#" className="dropdown-list__link">
        {listItem}
      </a>
    </li>
  );
}
