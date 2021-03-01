import { memo } from "react";

function StartButton({ handleSetter }) {
  return (
    <input
      className="addRow"
      value="Оставить отзыв"
      type="submit"
      onClick={() => handleSetter("nowDisplay", "form")}
    />
  );
}

export default memo(StartButton);
