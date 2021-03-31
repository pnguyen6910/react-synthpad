import { AppProvider } from "./context"
import ScalesSelector from './components/ScaleSelector'
function App() {
  return (
    <AppProvider>
      <ScalesSelector />
    </AppProvider>
  );
}

export default App;
