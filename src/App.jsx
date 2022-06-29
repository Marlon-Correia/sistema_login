import { useState } from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routes'
import { ProviderLogin} from './contexts/Auth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProviderLogin>
      <RoutesApp />
      <GlobalStyle />
    </ProviderLogin>
  )
}

export default App
