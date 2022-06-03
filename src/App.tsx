import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./pages/Main";
import {Container} from "react-bootstrap";
import {Title} from "./components/Title";
import {Navigation} from "./components/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Blog} from "./pages/Blog";
import {Gallery} from "./pages/Gallery";
import {About} from "./pages/About";

function App() {
  return (
    <Container className="App red-border-dev">
        <BrowserRouter>
            <Title />
            <Navigation />
            <Routes>
                <Route path={"/"} element={<Main/>} />
                <Route path={"/blog"} element={<Blog/>} />
                <Route path={"/gallery"} element={<Gallery/>} />
                <Route path={"/about"} element={<About/>} />
            </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
