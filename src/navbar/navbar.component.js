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
               <li>
                   <a href="/react">
                    React App
                   </a>
               </li>
               <li>
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
            }

            .px-2 {
                padding-left: 1.25rem;
                padding-right: 1.25rem;
            }

            .py-2 {
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
            }
        `}
        </style>
    </React.Fragment>
)
