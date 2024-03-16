export function SkillsAnimation() {
  const skills = [
    { name: "Laravel", color: "Red" },
    // { name: "React", color: "Red" },
    // { name: "HTML", color: "Red" },
    // { name: "CSS", color: "Red" },
  ];
  let index = 0;
  let text = '';
  let finalText = '';
  let textLength = 0;

  while (index < skills.length) {
    text = skills[index].name;
    textLength = text.length;
    addText(text, textLength);
    index = index +1;
  }

  async function addText (text, textLength)
  {
      let start = 1;
      while (start <= textLength) {
        finalText = text.substring(0, start);
        await delay(300);
        console.log(finalText);
        start = start + 1;
      }
  }

  async function delay(milliSeconds)
  {
    return new Promise(resolve => {
      setTimeout(resolve, milliSeconds);
    })
  }

  return (
    <>
      <h1 className="text-danger">{finalText}</h1>
    </>
  );
}
