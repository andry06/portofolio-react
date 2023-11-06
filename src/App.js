import HomePage from "./page";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import DetailProject from "./page/DetailProject";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {


  return (
    // <HomePage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id/project/:mode" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
