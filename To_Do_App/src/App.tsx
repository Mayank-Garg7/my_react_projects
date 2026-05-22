import To_Dos from './components/To_Dos'
import {ContextProvider} from './context/Context_Work'


export default function App() {
  return (
    <ContextProvider>
      <To_Dos />
    </ContextProvider>
  )
}
