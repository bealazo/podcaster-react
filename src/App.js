
import { Route,Routes} from "react-router-dom";
import { Container } from '@mui/material';
import StoreProvider from './store/StoreProvider';
import Home from "./views/Home";
import Header from "./components/Header";
import Podcast from "./views/Podcast";


function App() {

    
  return (

    <StoreProvider>
      <Container maxWidth="90vw">
        <header>
          <Header/>
        </header>
        <main>
        <Routes>
          <Route
            exact path="/"          
            element={<Home/>}
          />
          <Route
            path="/podcast/*"
            element={<Podcast/>}
          />
      
        </Routes>
      </main>
    </Container>
  </StoreProvider>
   
  );
}

export default App;
