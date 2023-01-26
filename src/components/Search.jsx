import styled from "styled-components";
import Icon from "../asset/icons/Icon.png"

const InputContainer = styled.label`
  background-color: var(--color-bg);
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: var(--radi-input);
  border: solid 1px var(--color-text);
  width: 100%;
  max-width: 289px;

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search Customer',
})`
  border: none;
  outline: none;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);

  letter-spacing: var(--letter-spacing);
  opacity: 0.2;

  flex-grow: 1;
`;

const SearchIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  overflow: hidden;
  opacity: 0.5;
`;

export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
            <SearchIcon src={Icon}/>
        </InputContainer>
    )
}