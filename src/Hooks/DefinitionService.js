import { useEffect, useState } from "react";

//uselesscommit
const useFetchResult = (word) => {
  console.log("custom hook called : " + word);

  const [definition, setDefinition] = useState(null);

  useEffect(async () => {
    console.log("in useEffect custom");
    const result = await fetch(`http://localhost:3000/define/${word}`);
    const jsonResult = await result.json();

    setDefinition(JSON.stringify(jsonResult).replace(/[\[\]']+/g, ""));
  }, [word]);

  return definition;
};

export default useFetchResult;
