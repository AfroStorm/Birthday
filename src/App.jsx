import List from "./List";
import data from "./data";
import { useState } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    /* border: 2px solid red; */
    width: 90vw;
    max-width: var(--fixed-width); /* 37.5rem */
    margin: 5rem 0;
    background-color: var(--white);
    border-radius: var(--borderRadius);
    padding: 1.5rem 2rem;
    box-shadow: var(--shadow-1);
  }

  & .container h3 {
    margin-bottom: 2rem;
  }
`;

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <StyledMain>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </StyledMain>
  );
};
export default App;
