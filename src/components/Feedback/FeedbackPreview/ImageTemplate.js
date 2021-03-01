import { memo } from "react";

function ImageTemplate(img) {
  return (
    <span className="imgWrap">
      <img src={img.src} alt="preview" />
    </span>
  );
}

export default memo(ImageTemplate);
