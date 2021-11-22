export default function DropdownListItem({ listItem }) {
  return (
    <li>
      <a href="/blogr-landing-page" className="dropdown-list__link">
        {listItem}
      </a>
    </li>
  );
}
