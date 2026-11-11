import './App.css'
import CategoryNav from './components/header/categorynav/CategoryNav'
import MainHeader from './components/header/mainheader/MainHeader'
import TopBar from './components/header/topbar/TopBar'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <TopBar />
      <MainHeader />
      <CategoryNav />
      <Home />
    </div>
  )
}

export default App
