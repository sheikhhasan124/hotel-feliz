import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Resister from './Pages/Resister/Resister';

const App = () => {
    return (
        <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/resister" element={<Resister></Resister>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
        </>
    );
};

export default App;