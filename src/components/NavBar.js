import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-inflex items-center py-6 px-3 mr-4 text-blue-100 hover:text-yellow-200 text-4xl font-bold cursive tracking-widest">
                        Portfolio
                    </NavLink>
                    <NavLink to="/post" className="inline-inflex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-yellow-200">
                        Post
                    </NavLink>
                    <NavLink to="/project" className="inline-inflex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-yellow-200">
                        Project
                    </NavLink>
                    <NavLink to="/about" className="inline-inflex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-yellow-200">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}