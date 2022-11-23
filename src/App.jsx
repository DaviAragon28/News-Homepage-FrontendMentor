import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Menu } from "./components/Menu/Menu"
import { AppProvider } from "./context/context"

function App() {
  return (
    <AppProvider>
      <Header />
      <Menu />
      <Main />
    </AppProvider>
  )
}

export default App
