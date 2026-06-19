import Portfolio from './Portfolio'; 
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="App">
      <Analytics />
      <Portfolio />
    </div>
  );
}

export default App;