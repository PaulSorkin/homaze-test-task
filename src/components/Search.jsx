import styled from "styled-components";
import Icon from "../asset/icons/Icon.png"

const InputContainer = styled.label`
  background-color: var(--color-bg);
  padding: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: var(--radi-input);
  width: 100%;
  max-width: 289px;
  //margin-bottom: 1rem;
  
  /*@media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }*/
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search Customer',
})`
  border: none;
  outline: none;
  background-color: var(--color-bg);
  color: var(--color-text-light);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);

  letter-spacing: 0.272728px;
`;

const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  overflow: hidden;
`;


export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
            <SearchIcon src={Icon}/>
        </InputContainer>
    )
}