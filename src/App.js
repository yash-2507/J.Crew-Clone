import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ModalMain from "./components/ModalMain";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";

function App() {
    const { isOpen } = useSelector((store) => store.modal);
    const { isLoginOpen } = useSelector((store) => store.login);
    return (
        <div className="App">
            {isLoginOpen && <LoginModal />}
            {isOpen && <ModalMain />}
            <Navbar />
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;
