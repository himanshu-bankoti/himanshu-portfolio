import { useEffect, useState } from "react";

export function TypeWriterEffect({ iterationArray }) {
  let arrayIndex = 0;
  let text = "";
  let [finalText, setFinalText] = useState("");
  let textLength = 0;

  useEffect(() => {
    async function animate() {
      while (arrayIndex < iterationArray.length) {
        text = iterationArray[arrayIndex].name;
        textLength = text.length;
        await addText(text, textLength);
        await deleteText(text, textLength);
        arrayIndex = arrayIndex + 1;
      }
    }
    animate();

    async function deleteText(text, textLength) {
      let end = textLength;
      while (end > 0) {
        end = end - 1;
        finalText = text.substring(0, end);
        setFinalText(finalText);
        await delay(300);
      }
    }

    async function addText(text, textLength) {
      let start = 1;
      while (start <= textLength) {
        finalText = text.substring(0, start);
        setFinalText(finalText);
        await delay(300);
        start = start + 1;
      }
    }

    async function delay(milliSeconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliSeconds);
      });
    }
  }, []);

  return (
    <>
      <h1 className="text-danger">{finalText}</h1>
    </>
  );
}
