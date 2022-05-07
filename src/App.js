import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "./pages/imageList";
import ImageDetails from "./pages/imageDetails";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="images/:id" element={<ImageDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
