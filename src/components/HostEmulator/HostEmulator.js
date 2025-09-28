import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "@components/Navbar/Navbar";
import PushkinPage from "@pages/PushkinPage/PushkinPage";
import LermontovPage from "@pages/LermontovPage/LermontovPage";
import LomonosovPage from "@pages/LomonosovPage/LomonosovPage";

const items = [
    { title: "Главная", link: "/" },
    { title: "Пушкин", link: "/pushkin" },
    { title: "Лермонтов", link: "/lermontov" },
    { title: "Ломоносов", link: "/lomonosov" },
];

export const HostEmulator = () => {
    return (
        <Router>
            <h1>Эмулятор host-модуля для локальной разработки</h1>
            <header>
                <Navbar items={items} />
            </header>
            <main>
                <Switch>
                    <Route path="/pushkin">
                        <PushkinPage />
                    </Route>
                    <Route path="/lermontov">
                        <LermontovPage />
                    </Route>
                    <Route path="/lomonosov">
                        <LomonosovPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
};

HostEmulator.displayName = "HostEmulator";
