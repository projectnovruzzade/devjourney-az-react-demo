// ! Layout Component
import WelcomePage from "../assets/pages/Welcome_Page"
import Header from "../components/Header"
import "./layout.scss"


const MainLayout = () => {
  return (
    <div id="all-wrapper">
      <Header />
      <WelcomePage />
    </div>
  )
}

export default MainLayout