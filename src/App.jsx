
import './App.css'
import Navbar from './components/Navbar'
import { Search } from './components/Search'
import Sidebar from './components/Sidebar'
import TabletContainer from './components/TabletContainer'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className="main_container">
        <Sidebar />
        <TabletContainer />
      </div>
    </div>
  )
}

export default App
