import React from "react"

export const Navbar = () => (
    <React.Fragment>
        <div className='navbar'>
            <ul>
               <li>
                   <a href="/">
                    Home
                   </a>
               </li>
               <li className="my-1">
                   <a href="/react">
                    React App
                   </a>
               </li>
               <li className="my-1">
                    <a href="/vue">
                        Vue App
                    </a>
               </li>
            </ul>
        </div>
        <style jsx>
        {`
            ul {
                margin: 0;
                padding: 0;
            }

            li {
                list-style-type: none;
            }

            a {
                text-decoration: none;
                color: purple;
            }

            a:hover, a:focus, a:visited, a:active {
                color: goldenrod;
            }
            
            .h-100 {
                height: 100%;
            }

            .navbar {
                border-right: 1px solid goldenrod;
                padding: 1.25rem 1.25rem;
                height: 100vh;
            }

            .px-2 {
                padding-left: 1.25rem;
                padding-right: 1.25rem;
            }

            .py-2 {
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
            }

            .py-1 {
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
            }

            .my-1 {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .mx-3 {
                margin-left: 1.75rem;
                margin-right: 1.75rem;
            }
        `}
        </style>
    </React.Fragment>
)
