import { useSelector } from "react-redux";
import "./App.css";
import ModalMain from "./components/ModalMain";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Index from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    const { isOpen } = useSelector((store) => store.modal);
    const { isLoginOpen, isSignUpOpen } = useSelector((store) => store.login);
    return (
        <div className="App">
            {/* <Navbar /> */}
            {isLoginOpen && <LoginModal />}
            {isSignUpOpen && <SignUpModal />}
            {isOpen && <ModalMain />}
            <Index />
        </div>
    );
}

export default App;
