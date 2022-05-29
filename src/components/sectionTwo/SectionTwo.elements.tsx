import styled from '@emotion/styled';

export const GeneralContainerTwo = styled.div`
  background-color: #fa4b00;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 70%;
  margin-top: 1rem;
  border-radius: 1rem;
  font-family: 'JosefinSansMedium';
`;
export const Title = styled.h2`
  font-family: 'JosefinSansBold';
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;
export const MinAndMaxContent = styled.div<{ redFlag?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ redFlag }) => (redFlag ? 'red' : 'none')};
`;
export const MinContent = styled.div<{ redFlag?: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
  input {
    width: 28%;
    height: 80%;
    font-family: 'JosefinSansMedium';
    font-size: 1.5rem;
    padding: 0.3rem;
    border: 5px solid ${({ redFlag }) => (redFlag ? 'red' : 'none')};
  }
`;
export const MaxContent = styled.div<{ redFlag?: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
  input {
    width: 28%;
    height: 80%;
    font-family: 'JosefinSansMedium';
    font-size: 1.5rem;
    padding: 0.3rem;
    border: 5px solid ${({ redFlag }) => (redFlag ? 'red' : 'none')};
  }
`;
export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffc60a;
  justify-content: center;
  border: none;
  border-radius: 8px;
  width: 30%;
  margin-top: 1rem;
  font-family: 'JosefinSansMedium';
  font-size: 1.5rem;
  padding: 0.5rem;
  :hover {
    background-color: #ffc60a4c;
    color: #00000060;
    transition-duration: 0.5s;
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
