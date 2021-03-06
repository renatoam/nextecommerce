import {
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import StyledMenu from "./styles";
import Icon from "../Icon";

export default function Menu() {
  return (
    <StyledMenu>
      <nav>
        <ul>
          <li>Home <Icon icon={faCaretDown} /></li>
          <li>About <Icon icon={faCaretDown} /></li>
          <li>Shop</li>
          <li>Catalogue</li>
          <li>New Arrivals</li>
          <li>Contact</li>
        </ul>
      </nav>
    </StyledMenu>
  );
}