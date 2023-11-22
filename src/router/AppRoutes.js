import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { CadProdutos } from "../pages/cadProdutos/CadProdutos";
import { CadUsuarios } from "../pages/cadUsuarios/cadUsuarios";
import { Erro } from "../pages/erro/erro";
import { useAuth } from "../hooks/useAuth";

const Private = ({Item}) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />;
}

export const AppRoutes = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route exact path="/cadprodutos" element={ <Private Item={CadProdutos}/> } />
                <Route path="/cadusuarios" element={ <CadUsuarios/> } />
                <Route path="*" element={ <Erro/> } />

            </Routes>
        </BrowserRouter>
    )
}