import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

export default function App() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const addTag = (e) => {
    console.log(e.target.value, e.key);

    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        setInputValue([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <div className="App">
      <p>Tags </p>
      <p>
        Tags can be useful if content in your video is commonly misspelled.
        Otherwise, tags play a minimal role in helping viewers find your video.{" "}
        <a title="link saiba mais" href="#">
          Learn More
        </a>
      </p>
      <div className="tag-container" value={inputValue}>
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {"#" + tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}

        <input placeholder="Enter a comma after each tag" onKeyDown={addTag} />
        <CopyToClipboard text={inputValue}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
