import { memo } from "react";
import HomepageLink from "./HomepageLink";
import ImageTemplate from "./ImageTemplate";
import DateStreeng from "./DateStreeng";

function FeedbackRowPreview({ data, handleSetter }) {
  return (
    <li>
      <span className="userInfo">
        <p>{data.name}</p>
        {data.homePage && <HomepageLink homePage={data.homePage} />}
        <DateStreeng />
        <input
          type="button"
          className="buttonSubmit continueEditing"
          defaultValue="Продолжить редактирование"
          onClick={() => handleSetter("nowDisplay", "form")}
        />
      </span>
      <span className="feedbackText">{data.text}</span>
      {data.image && <ImageTemplate src={data.image} />}
    </li>
  );
}

export default memo(FeedbackRowPreview);
