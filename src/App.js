import { AppProvider } from "./context"
import ScalesSelector from './components/ScaleSelector'
import Layout from './components/Layout'
import Synth from './components/Synth'
import Volume from './components/Volume'

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScalesSelector />
        <Volume />
        <Synth />
      </Layout>
    </AppProvider>
  );
}

export default App;
