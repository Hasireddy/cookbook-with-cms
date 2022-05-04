import React from 'react';
import { useState, useEffect } from 'react';
import '../index.css';
import Recipe from './recipe';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import { getRecipes, getAllData } from '../API/data.js';//data.js file

const article = (data) => {
    // console.log(data.filter(data => data.fields.name === 'Quinoa and Eggplant Stuffed Peppers'));
    console.log(data);
    const result = data;
    return result.map(iteration => {
        return (
            <div className="col md-4" >
                <div className="card w-100 md-4" style={{ border: "white" }}>
                    <img alt='testing' className="card-img" src={iteration.fields.image.fields.file.url} />
                    <div className="card-body">
                        <p className="card-text" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            {iteration.fields.name}
                        </p>

                    </div>
                </div>
                <Link className="btn btn-primary" to={`/DetailedRecipe/${iteration.fields.name}`}>Read more</Link>
            </div>
        )
    });
};
const MainPage = () => {
    const [fetchdata, setFetchdata] = useState();
    useEffect(() => {
        (async () => {
            getRecipes()
                .then(jsonobj => setFetchdata(article(jsonobj)))
        })();
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-dark" alt='tes' href="#">The Recipe Book</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-dark" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recipes
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Spain</a>
                                <a className="dropdown-item" href="#">India</a>
                                <a className="dropdown-item" href="#">Africa</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <main className="m-0 jumbotron">
                <div className="topper container">
                    <div style={{ backgroundImage: 'url(assets/intro.jpeg)', height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: '100% auto' }}>
                        <div className="row h-100 p-0 mx-0">
                            <div className="col text-center bg-light bg-opacity-10 text-dark border-dark my-auto">
                                <h2 className="mx-auto p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Welcome to the Amazing Cookbook</h2>
                                <h4 className="mx-auto p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Here you will be able to find some of the best recipes in the World.</h4>
                                <h4 className="mx-auto p-2" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Enjoy!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-dark p-2 mr-2" style={{ fontFamily: '"Times New Roman", Times, serif', color: 'violet' }}>Recipes</h1>
                <h4 className="text-center text-dark p-2 mr-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Here you can find some of our most popular recipes.</h4>
                <div className="container">
                    <div className="row">

                        {fetchdata}
                    </div>
                </div>
            </main>
            <footer className style={{ backgroundImage: 'url(assets/gbbb.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container">
                </div>
                <div className="container d-flex flex-column align-items-start justify-content-center">
                    <form action="action_page.php">
                        <div className="d-flex flex-column align-items-start justify-content-start mw-25" style={{ width: '420px' }}>
                            <div className="container">
                                <h4 className="text-white">Want to recieve oure latest Recipes?</h4>
                                <p className="text-white">
                                    Then subscribe to our Newsletter and you will be the first to try out our newest creations!
                                </p>
                            </div>
                            <div className="container d-flex flex-row justify-content-start align-content-center p-0">
                                <div className="container">
                                    <input className="email" type="text" placeholder="Email address" />

                                    <input type="submit" defaultValue="Subscribe" className="btn btn-outline-light" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="container p-2 m-2">
                        <a href><img className="mr-3" src="assets/logo_facebook.png" width="30px" margin-right="5px" height="true" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_instagram.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_twitter.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                        <a href><img className="mr-3" src="assets/logo_youtube.png" width="30px" height="true" margin-right="5px" alt='testing' /></a>
                    </div>
                </div>
                <div className="copyright d-flex flex-row justify-content-around mt-3 pt-2 bg-light">
                    <div className="privacy">
                        HELP &nbsp; &nbsp; &nbsp; &nbsp;TERM &amp; CONDITION &nbsp; &nbsp; &nbsp;PRIVACY
                    </div>
                    <p className="copyright-text">copyright © 2022 - The International Cookbook</p>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;