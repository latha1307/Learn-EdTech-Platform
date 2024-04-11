import { useState } from 'react';
import logo from '../assets/logo.png';
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {link: "Overview", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ];

    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2x1 border-b mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex items-center space-x-3'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" width="80" height="80" className='inline-block'/> <span>LEARN</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => (<Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>))
                            
                        }
                    </ul>
                </div>

                {/* language and sign up */}
                
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/>
                        <span>Language</span>
                    </a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>

                </div>
            </div>
        </nav>

        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
            {
                navItems.map(({link, path}) => (<Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block hover:text-gray-300 cursor-pointer text-white' onClick={toggleMenu}>{link}</Link>))

            }
        </div>
        </>
    );
};

export default Navbar;

// import logo from '../assets/logo.png';
// import { GrLanguage } from "react-icons/gr";

// const Navbar = () => {
//     const navItems = [
//         {link: "Overview", path: "home"},
//         {link: "Feature", path: "feature"},
//         {link: "About", path: "about"},
//         {link: "Pricing", path: "pricing"},
//     ];

//     return (
//         <nav className="bg-gray-800">
//             <div className='container mx-auto flex justify-between items-center'>
//                 <a href="/" className='flex items-center space-x-3 text-primary'>
//                     <img src={logo} alt="" width="50" height="50" className='inline-block'/> 
//                     <span className="text-white font-semibold text-lg">LEARN</span>
//                 </a>
                
//                 <ul className='flex space-x-8'>
//                     {navItems.map(({link, path}) => (
//                         <li key={link}>
//                             <a href={path} className='text-gray-300 hover:text-white'>{link}</a>
//                         </li>
//                     ))}
//                 </ul>

//                 <div className='space-x-8 hidden md:flex items-center'>
//                     <a href="/" className='flex items-center text-gray-300 hover:text-white'>
//                         <GrLanguage className='mr-2'/>
//                         <span>Language</span>
//                     </a>
//                     <button className='bg-indigo-600 py-2 px-4 rounded text-white hover:bg-indigo-700'>Sign up</button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;