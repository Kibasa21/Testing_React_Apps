import { useState } from "react";
import Output from "./Output";

export default function Greeting() {

    const [changedText, setChangedText] = useState(false);

  return (
    <div>
        <h1>Hello World!</h1>
        {!changedText ? <Output>It&apos;s good to see you!</Output> : <Output>Changed!</Output>}
        <button onClick={() => setChangedText(true)}>Change Text!</button>
    </div>
  );
}