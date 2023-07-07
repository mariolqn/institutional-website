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
        font-size: 7.5rem;
        padding-bottom: 1rem;
    }
    h2{
        font-weight: lighter;
        font-size: 7rem;
        padding-bottom: 1rem;
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
    button{
        height: 4rem;
        width: 8rem;
    }
`;

export const ContainerOffers = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    max-width: 65rem;
    margin-bottom: 10rem;
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
