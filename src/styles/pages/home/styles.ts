import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;

`;
export const ContainerAction = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem 0rem;
    margin-bottom: 10rem;
    overflow-y: none;
    h1{
        font-weight: bold;
        font-size: 7rem;
        padding-bottom: 1rem;
        font-family: var(--futuramediumbt );
        font-weight: 700;
        @media (max-width: 576px) {
            font-size: 4rem;
        }
        @media (min-width: 576px) {
            font-size: 4rem;
        }
        @media (min-width: 1025px) {
            font-size: 6rem;
        }
        @media (min-width: 1225px) {
            font-size: 7rem;
        }
        }
    h2{
        font-weight: lighter;
        font-size: 6.5rem;
        padding-bottom: 1rem;
        font-family: var(--futuramediumbt );
        font-weight: 500;
        @media (max-width: 576px) {
            font-size: 2rem;
            padding-bottom: 4rem;
        }
        @media (min-width: 576px) {
            padding-bottom: 4rem;
            font-size: 2rem;
        }
        @media (min-width: 1025px) {
            padding: 2rem;
            font-size: 5.5rem;
        }
        @media (min-width: 1225px) {
            font-size: 6.5rem;
        }
        
    }
    h4{
        padding: 0.3rem;
        font-size: 2rem;
        padding-bottom: 0.5rem;
        @media (max-width: 576px) {
            padding: 0rem;
            font-size: 0.8rem;
        }
        @media (min-width: 576px) {
            font-size: 1.1rem;
        }
        @media (min-width: 1025px) {
            font-size: 1.9rem;
        }
        @media (min-width: 1225px) {
            font-size: 2rem;
        }
        
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
    @media (max-width: 576px) {
        margin-bottom: 10rem;
        grid-template-columns: repeat(2, 1fr);

    }
`;
export const TittleOffers = styled.h3`
    padding: 0rem 2rem;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    @media (max-width: 576px) {
        padding: 0rem;

        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }
    @media (min-width: 576px) {
        margin-bottom: 2rem;
    }
    @media (min-width: 1025px) {
        font-size: 1.5rem;

    }
`;

export const ContainerSecondArea = styled.div`
    padding: 2rem 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 80rem;
    margin-bottom: 25rem;
    @media (max-width: 576px) {
        flex-direction: column;
        margin-bottom: 10rem;
    }
   
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
    @media (max-width: 576px) {
        width: 100%;
        
    }
   
`;
export const TittleColor = styled.h1<{colored ?: boolean}>`
    color: ${(props) => props.colored ? props.theme.productAccent2 : "white"};
    font-size: 3rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
`;

export const ContainerBannersRight = styled.div`
    width: 50%;
    h5{
        margin-left: 1rem;
        font-size: 0.8rem;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
    @media (min-width: 576px) {
        width: 100%;
    }
`;
export const ContainerTexts = styled.div`
    width: 100%;
    justify-content: space-between;
    display: grid;
    justify-items: left;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    
`;

export const ContainerBorderText = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid 2px ${(props) => props. theme.productError1};
    margin: 0rem 0rem 2rem 0rem;
    padding: 0rem;
    h5{
        font-size: 0.9rem;
        margin: 0rem 0rem 0rem 1rem;
        padding: 0rem;
        @media (max-width: 576px) {
            margin: 0rem 0rem 0rem 1rem;
            padding: 0rem;
            margin-bottom: 0rem;
        }
    }
    @media (max-width: 576px) {
        margin: 2rem 0rem 2rem 0rem;
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
    margin-bottom: 25rem;
    @media (max-width: 576px) {
         margin-bottom: 10rem;
    }
`;

export const ContainerTextTitle = styled.div`
    text-align: start;
    width: 100%;
    h1{
        font-size: 4rem;
        margin-bottom: 2rem;
        @media (max-width: 576px) {
            font-size: 3rem;
        }
    }
    h4{
        font-size: 1.4rem;
        margin-bottom: 2rem;
        @media (max-width: 576px) {
            font-size: 1.2rem;
        }
    }
    
`;

export const ContainerProcess = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 576px) {
        flex-direction: column;
    }
    
`;
export const ContainerLeft = styled.div`
    width: 50%;
    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 5rem;
    }

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
    @media (max-width: 576px) {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        width: 100%;
        margin-left: 0rem;

    }
`;