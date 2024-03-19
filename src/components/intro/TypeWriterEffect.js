import { useEffect, useRef, useState } from "react";

export function TypeWriterEffect({ iterationArray }) {
  const [counter, setCounter] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [text, setText] = useState("");
  const skipIteration = useRef(true);

  async function writeText(text) {
    let currentChar = 1;
    return new Promise((resolve) => {
      setInterval(() => {
        if (currentChar <= text.length) {
          console.log(currentChar);
          setFinalText(text.substring(0, currentChar));
          currentChar = currentChar + 1;
        } else {
          clearInterval();
          resolve();
        }
      }, 200);
    });
  }

  async function runEffect(text) {
    await writeText(text);
    if (counter < iterationArray.length) {
      setCounter(counter + 1);
      setText(iterationArray[counter].name);
    }
  }

  useEffect(() => {
    // Skipping useEffect first execution of react strict.
    if (skipIteration.current) {
      skipIteration.current = false;
      return;
    }
    runEffect(text);
  }, [counter]);

  return <>{<h1 className="text-danger">{finalText}</h1>}</>;
}
