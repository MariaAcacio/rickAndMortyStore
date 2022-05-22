import styled from '@emotion/styled';

export const ContainerCart = styled.div`
  /* background-color: #ffffff50; */
  /* padding: 1rem; */
  /* height: auto; */
  /* border-radius: 8px; */
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
export const General = styled.div`
  background-color: #ffffff50;
  padding: 1rem;
  height: auto;
  border-radius: 8px;
  /* display: flex; */
  /* align-items: center; */
  /* gap: 1rem; */
  justify-content: center;
`;
export const Features = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
export const ButtonContainer = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 0.5rem;
`;
export const TextBox = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  color: #000000;
`;
export const DecreaseButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #ff0357;
  padding: 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #a7053b;
    color: white;
    transition-duration: 0.5s;
  }
`;
export const DeleteButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #f40009;
  padding: 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #8f0105;
    color: white;
    transition-duration: 0.5s;
  }
`;
