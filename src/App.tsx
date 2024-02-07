import React from 'react';
import "./index.css"
import ThemeWrapper from "./components/ThemeWrapper";
import Header from "./components/header/Header";
import Editor from "./pages/Editor";

const App = () => {
    return (
        <ThemeWrapper>
            <Header/>
            <Editor/>
        </ThemeWrapper>
    );
};

export default App;