import "./HoverText.scss";

export const HoverText = () => {
  return (
    <div className="hoverText-Box">
      <ul>
        <li>
          <a href="#" data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </a>
        </li>
        <li>
          <a href="#" data-text="About">
            About
          </a>
        </li>
        <li>
          <a href="#" data-text="Services">
            Services
          </a>
        </li>
        <li>
          <a href="#" data-text="Team">
            Team
          </a>
        </li>
        <li>
          <a href="#" data-text="Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
