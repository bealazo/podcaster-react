
import { Route,Routes} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Podcast from "./views/Podcast";
import EpisodeDetails from "./components/EpisodeDetails";
import { Container } from '@mui/material';

function App() {
  return (

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
          path="/podcast/:podcastId"
          element={<Podcast/>}
        />
         <Route
           path="/podcast/:podcastId/episodes/:episodeId"
           element={<EpisodeDetails/>}
         />
      </Routes>
    </main>
  </Container>
   
  );
}

export default App;
