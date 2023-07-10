import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const TimeText = styled.h4`
  min-height: 1rem;
  width: 100%;
  color: ${(props) => props.theme.productError2};
   @media (max-width: 576px) {
      min-height: 1rem;
    }
`;
export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const ContainerLeft  = styled.div<{appear ?: boolean}>`
  opacity: ${(props) => props.appear ? 1 : 0};
  text-align: right;
  margin-right: 1rem;
  min-height: 8rem;
  h2{
      @media (max-width: 576px) {
        min-height: 5.5rem;
      }
    }
  @media (max-width: 576px) {
      min-height: 5rem;

    }
  
`;

export const ContainerMiddle = styled.div `
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ContainerRight = styled.div<{appear ?: boolean}>`
  opacity: ${(props) => props.appear ? 1 : 0};
  margin-left: 1rem;
  min-height: 8rem;
    h2{
      @media (max-width: 576px) {
        min-height: 6.1rem;
      }
    }
  @media (max-width: 576px) {
      min-height: 5rem;

    }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.productDark4};
`;

export const Divider = styled.div`
  background: ${(props) => props.theme.productError1};
  height: 5rem;
  width: 2px;
`;


