import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage'
import GalleryPage from './pages/gallery/GalleryPage'
import ContactPage from './pages/contact/ContactPage'
import NotFoundPage from './pages/404'



function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" >
                    <MainPage/>
                </Route>
                <Route exact path="/gallery" >
                    <GalleryPage/>
                </Route>
                <Route exact path="/contact" >
                    <ContactPage/>
                </Route>
                <Route  path="*" >
                    <NotFoundPage/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;