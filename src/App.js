import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ModalMain from "./components/ModalMain";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";

function App() {
    const { isOpen } = useSelector((store) => store.modal);
    const { isLoginOpen, isSignUpOpen } = useSelector((store) => store.login);
    return (
        <div className="App">
            {isLoginOpen && <LoginModal />}
            {isSignUpOpen && <SignUpModal />}
            {isOpen && <ModalMain />}
            <Navbar />
            <MainPage />
            <Footer />
            {/* <Mens /> */}
            {/* <Women /> */}
            {/* <Kids /> */}
        </div>
    );
}

export default App;
