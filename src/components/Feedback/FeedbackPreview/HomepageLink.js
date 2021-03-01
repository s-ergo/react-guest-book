import { memo } from "react";

function HomepageLink({ homePage }) {
  return (
    <a href={"http://" + homePage}>
      <i className="material-icons homePage">link</i>
    </a>
  );
}

export default memo(HomepageLink);
