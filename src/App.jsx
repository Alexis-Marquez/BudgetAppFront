// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/budgetMain/Home.jsx";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/*<Route path="/house-affordability-calculator" element={<AffordabilityCalcLayout/>}/>*/}
                </Route>
            </Routes>
        </div>
    )
}
export default App
