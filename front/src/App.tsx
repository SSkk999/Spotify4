import { Route, Routes } from "react-router";
import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/auth/LoginPage";
import { login } from "./store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import GanrePage from "./pages/GanrePage/GanrePage";
import TrackAddPage from "./pages/TrackAddPage/TrackAddPage"
import GenreRenema from "./pages/GanreRenema/GenreRenema";
import GenreAdd from "./pages/GenreAddPage/GenreAdd";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            dispatch(login(token));
        }
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="genre" element={<GanrePage />} />
                <Route path="trackadd" element={<TrackAddPage />} />
                <Route path="genrerenema" element={<GenreRenema />} />
                <Route path="genreadd" element={<GenreAdd />} />
            </Route>
        </Routes>
    );
}

export default App;
