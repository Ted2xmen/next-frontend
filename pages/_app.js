import "../styles/globals.css";
import styled from 'styled-components'
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";


const Container = styled.div`
  display: flex;
`

const MainContent = styled.div`
  background-color: #6a8c20;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Container>
          <Sidebar />

        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </Container>
    </>
  );
}

export default MyApp;
