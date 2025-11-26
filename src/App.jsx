import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/project/:id" element={<ProjectDetail />} />
                        <Route path="/contact" element={<div className="p-20 text-center">Contact me at <a href="mailto:email@example.com" className="underline">email@example.com</a></div>} />
                    </Routes>
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;
