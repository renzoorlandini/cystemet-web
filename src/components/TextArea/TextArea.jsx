import CustomTextArea from "./CustomTextArea";
import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w100">
      <CustomTextArea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        wrap="soft"
      />
    </div>
  );
};

export default TextArea;
