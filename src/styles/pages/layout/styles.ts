import styled from  'styled-components'


export const ContainerLayout = styled.div`
    display:flex;   
    align-items: center;
    flex-direction: column;
    @media (max-width: 576px) {
        padding: 0rem 2rem;
    }
    @media  (min-width: 576px) {
        padding: 1rem 1rem;
    }
    @media (min-width: 1025px){
        padding: 1rem 5rem;
    }
    @media (min-width: 1225px){
        padding: 1rem 18rem;
    }
   
  
 
`;