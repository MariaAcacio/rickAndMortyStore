import styled from '@emotion/styled';
import { SectionOne, SectionThree, SectionTwo, Header } from './components';
import { Store } from './store';
import { Provider } from 'react-redux';
import './App.css';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;
function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={Store}>
        <Container>
          {true && <SectionOne />}
          <SectionTwo />
          {true && <SectionThree />}
        </Container>
      </Provider>
    </div>
  );
}

export default App;
