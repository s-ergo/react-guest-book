import { memo } from "react";

function DateStreeng() {
  const date = new Date();

  return (
    <p>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getUTCDate()} &ensp;
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </p>
  );
}

export default memo(DateStreeng);
