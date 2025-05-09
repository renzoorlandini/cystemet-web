import React, { useRef } from "react";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import "react-perfect-scrollbar/dist/css/styles.css";
import "./CustomTextArea.css";

const CustomTextArea = ({ value, onChange, placeholder }) => {
  const textareaRef = useRef(null);

  return (
    <div className="textarea-wrapper w100 h100 font-inter400 p-15 bsbb">
      {/* <PerfectScrollbar> */}
      <textarea
        ref={textareaRef}
        className="custom-scrollbar-textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* </PerfectScrollbar> */}
    </div>
  );
};
export default CustomTextArea;
