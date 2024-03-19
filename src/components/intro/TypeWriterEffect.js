import { useEffect, useRef, useState } from "react";

export function TypeWriterEffect({ iterationArray, typingSpeed }) {
  const [counter, setCounter] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [text, setText] = useState("");
  const skipIteration = useRef(true);
  const typeSpeed = useRef(typingSpeed); //In Milliseconds

  async function writeText(text) {
    let currentChar = 1;
    return new Promise((resolve) => {
      setInterval(() => {
        if (currentChar <= text.length) {
          setFinalText(text.substring(0, currentChar));
          currentChar = currentChar + 1;
        } else {
          clearInterval();
          resolve();
        }
      }, typeSpeed.current);
    });
  }

  async function deleteText(text) {
    let currentChar = text.length;
    return new Promise((resolve) => {
      setInterval(() => {
        if (currentChar >= 0) {
          setFinalText(text.substring(0, currentChar));
          currentChar = currentChar - 1;
        } else {
          clearInterval();
          resolve();
        }
      }, typeSpeed.current);
    });
  }

  async function runEffect(text) {
    await writeText(text);
    await delay(500);
    await deleteText(text);
    await delay(200);

    setCounter((currentCounter) => {
      if (currentCounter < iterationArray.length - 1) {
        return currentCounter + 1;
      } else {
        return 0;
      }
    });
    setText(iterationArray[counter].name);
  }

  async function delay(milliSeconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliSeconds);
    });
  }

  useEffect(() => {
    // Skipping useEffect first execution of react strict.
    if (skipIteration.current) {
      skipIteration.current = false;
      return;
    }
    runEffect(text);
  }, [counter]);

  return (
    <>
      <span>
        {finalText} <span class="custom-cursor blink">I</span>
      </span>
    </>
  );
}
