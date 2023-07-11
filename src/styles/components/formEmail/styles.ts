import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 0rem;
    }
  div{
    display: flex;
    width: 100%;
    gap: 0.8rem;
    flex-direction: row;
  }

`;
export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.8rem;
  color: white; 
  outline: none;
  border: none;
  background: ${(props) => props.theme.productDark3};
    

 ::-webkit-input-placeholder {
  color: deeppink;
  }
  /* Firefox 4-18 */
  :-moz-placeholder {
    color: deeppink;
    opacity: 1;
  }
  /* Firefox 19+ */
  ::-moz-placeholder {
    color: deeppink;
    opacity: 1;
  }
  /* IE 10-11 */
  :-ms-input-placeholder {
    color: deeppink;
  }
  /* Edge */
  ::-ms-input-placeholder {
    color: deeppink;
  }
  /* MODERN BROWSER */
  ::placeholder {
    color: deeppink;
  }
`;

