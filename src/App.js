import { AppProvider } from "./context"
import ScalesSelector from './components/ScaleSelector'
import Layout from './components/Layout'

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScalesSelector />
      </Layout>
    </AppProvider>
  );
}

export default App;
