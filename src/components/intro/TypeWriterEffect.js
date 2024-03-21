import { useEffect, useRef, useState, useCallback} from "react";

export function TypeWriterEffect({ iterationArray, typingSpeed }) {
  const [counter, setCounter] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [text, setText] = useState("");
  const skipIteration = useRef(true);
  const typeSpeed = useRef(typingSpeed); //In Milliseconds
  const runEffectRef = useRef();

  async function writeText(text) {
    console.log('Inside writeText');

    let currentChar = 1;
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (currentChar <= text.length) {
          setFinalText(text.substring(0, currentChar));
          currentChar = currentChar + 1;
        } else {
          clearInterval(intervalId);
          resolve();
        }
      }, typeSpeed.current);
    });
  }

  async function deleteText(text) {
    let currentChar = text.length;
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (currentChar >= 0) {
          setFinalText(text.substring(0, currentChar));
          currentChar = currentChar - 1;
        } else {
          clearInterval(intervalId);
          resolve();
        }
      }, typeSpeed.current);
    });
  }

  const runEffect = useCallback(async (text) => {
    await writeText(text);
    await delay(500);
    await deleteText(text);
    await delay(200);

    setCounter((currentCounter) => {
      console.log('Inside setCounter');
      if (currentCounter < iterationArray.length - 1) {
        return currentCounter + 1;
      } else {
        return 0;
      }
    }, []);
    setText(iterationArray[counter].name);
  },[iterationArray, counter]);

  runEffectRef.current = runEffect;

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
    console.log('Inside useEffect');
    runEffectRef.current(text); 
  }, [counter, text, runEffect]);

  return (
    <>
      <span>
        {finalText} <span className="custom-cursor blink">I</span>
      </span>
    </>
  );
}
