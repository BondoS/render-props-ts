import React from 'react';

type Props = {
  result: {
    total_count?: number;
  }
};

const GithubSearchCount  = (props: Props) => {
  return <div>Count is {props.result?.total_count}</div>;
};

export default GithubSearchCount ;
