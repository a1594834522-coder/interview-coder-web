import { Route, Routes } from 'react-router-dom';
import DemoShowcase from '@/components/demo/DemoShowcase';
import FeaturesPage from '@/pages/FeaturesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoShowcase />} />
      <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  );
}

export default App;
