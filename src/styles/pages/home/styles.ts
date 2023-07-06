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
        font-size: 4rem;
        padding-bottom: 1rem;
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        padding-bottom: 1rem;
        }
    h4{
        padding: 0.3rem;
        font-size: 1rem;
        padding-bottom: 0.5rem;
    }
    h5{
        font-size: 0.8rem;
        color: ${(props) => props.theme.productDark4};
    }
`;

export const ContainerOffers = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 10rem;
    h3 {
        font-size: 1rem;
        max-width: 10rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;
export const ContainerSecondArea = styled.div`
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 60rem;
`;
export const ContainerTextLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
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
    display:flex;
    width: 100%;
    justify-content: space-between;
`;

export const ContainerBorderText = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid 2px ${(props) => props. theme.productError1};
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