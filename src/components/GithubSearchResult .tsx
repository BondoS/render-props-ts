import React from "react";

type Props = {
  result: {
    items?:[{
      login: string,
    }]
  }
};

const GithubSearchResult = (props: Props) => {
  return (
    <ul>
      {props.result?.items?.map(item => (
        <li key={item.login}>{item.login}</li>
      ))}
    </ul>
  );
};

export default GithubSearchResult;
