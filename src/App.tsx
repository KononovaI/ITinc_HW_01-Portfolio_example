import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Projects } from './layout/section/projects/Projects';
import { About } from './layout/section/about/About';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;