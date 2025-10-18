import { Route, Routes } from 'react-router-dom';
import DemoShowcase from '@/components/demo/DemoShowcase';
import FeaturesPage from '@/pages/FeaturesPage';
import PricingPage from '@/pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoShowcase />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
