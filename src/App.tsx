import React from "react";
import GithubSearch from "./components/GithubSearch";
import "./App.css";
import GithubSearchCount from "./components/GithubSearchCount ";
import GithubSearchResult from "./components/GithubSearchResult ";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GithubSearch>
          {(result: any) => <GithubSearchCount result={result} />}
        </GithubSearch>
        <GithubSearch>
          {(result: any) => <GithubSearchResult result={result} />}
        </GithubSearch>
      </header>
    </div>
  );
}

export default App;
