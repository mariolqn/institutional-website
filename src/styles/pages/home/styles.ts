import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ContainerAction = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
    margin-bottom: 5rem;
    overflow-y: none;
    h1{
        font-weight: bold;
        font-size: 7rem;
        padding-bottom: 1rem;
        font-family: var(--futuramediumbt );
        font-weight: 700;
    }
    h2{
        font-weight: lighter;
        font-size: 6.5rem;
        padding-bottom: 1rem;
        font-family: var(--futuramediumbt );
        font-weight: 500;
        }
    h4{
        padding: 0.3rem;
        font-size: 2rem;
        padding-bottom: 0.5rem;
        
    }
    h5{
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        color: ${(props) => props.theme.productDark4};
        
    }
    
`;

export const ContainerOffers = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    max-width: 65rem;
    margin-bottom: 15rem;
    h3 {
        font-size: 1rem;
        max-width: 10rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;
export const TittleOffers = styled.h3`
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 4rem;
`;

export const ContainerSecondArea = styled.div`
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 80rem;
`;
export const ContainerTextLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    line-height: 1.8;
    h4{
        font-size: 1.2rem;
        color: ${(props) => props.theme.productLight}
    }
`;
export const TittleColor = styled.h1<{colored ?: boolean}>`
    color: ${(props) => props.colored ? props.theme.productAccent2 : "white"};
    margin-right: 0.5rem;
    margin-bottom: 1rem;
`;

export const ContainerBannersRight = styled.div`
    width: 50%;
    h5{
        margin-left: 1rem;
        font-size: 0.8rem;
    }
`;
export const ContainerTexts = styled.div`
    width: 100%;
    justify-content: space-between;
    display: grid;
    justify-items: left;
    grid-template-columns: repeat(2, 1fr);
    
`;

export const ContainerBorderText = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid 2px ${(props) => props. theme.productError1};
    margin-bottom: 2rem;
    h5{
        font-size: 0.9rem;
    }
`;

export const ContainerTopText = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const CompanyBenefits = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
`;

export const ContainerEmail = styled.div`
    width: 100%;
   
`;
export const ContainerSocial = styled.div`
    display:flex;
    align-items: center;
`;
export const ContainerEmailLeft = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
`;

export const ContainerEmailRight = styled.div`
    display:flex;
`;

export const ContainerTable = styled.div`
    width: 100%;
    max-width: 70rem;
`;

export const ContainerTextTitle = styled.div`
    text-align: start;
    width: 100%;
    margin-top: 20rem;
    h1{
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    h4{
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }
`;

export const ContainerProcess = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25rem;
    
`;
export const ContainerLeft = styled.div`
    width: 50%;

`;
export const ContainerRight = styled.div`
    width: 50%;
    margin-left: 10rem;
    h1{
        font-size: 4rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        background-image: linear-gradient(to top, #FF6DC1 0% , #01F3FD 100%); 
        margin-bottom: 2rem;
    }
    h2{
        font-size: 4rem;
        margin-right: 1rem;
    }
    h3{
        font-size: 1.8rem;
        margin-bottom: 2rem;
        max-width: 28rem;
    }
`;