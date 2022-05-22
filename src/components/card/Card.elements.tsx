import styled from '@emotion/styled';

export const ContainerCard = styled.div`
  font-family: 'JosefinSansBold';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  text-transform: capitalize;
  font-weight: bolder;

  @media (min-width: 420px) {
    flex-direction: row;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonCart = styled.button`
  font-family: 'JosefinSansBold';
  border: none;
  border-radius: 8px;
  background-color: #0c9bfa;
  padding: 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #116fad;
    color: white;
    transition-duration: 0.5s;
  }
`;
export const HighlightButton = styled.button`
  font-family: 'JosefinSansBold';
  border-radius: 8px;
  border: none;
  background-color: #0cfa54;
  padding: 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #11ad40;
    color: white;
    transition-duration: 0.5s;
  }
`;
