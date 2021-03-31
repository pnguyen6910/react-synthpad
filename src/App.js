import { AppProvider } from "./context"
import ScalesSelector from './components/ScaleSelector'
import Layout from './components/Layout'
import Synth from './components/Synth'

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScalesSelector />
        <Synth />
      </Layout>
    </AppProvider>
  );
}

export default App;
