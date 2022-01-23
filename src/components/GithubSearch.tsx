import React, { useEffect, useState } from "react";

type Props = {
  children: any
};

const GithubSearch = (props: Props) => {

  const [result, setResult] = useState<object>({});

  useEffect(() => {
    fetch("https://api.github.com/search/users?q=serag")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  }, []);
  return((props.children(result)));
};

export default GithubSearch;
