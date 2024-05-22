import styled from "styled-components";

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;

  & img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: var(--shadow-3);
  }

  & h4 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  & p {
    color: var(--grey-500);
  }
`;

const Person = ({ name, age, image }) => {
  return (
    <StyledArticle>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </StyledArticle>
  );
};
export default Person;
