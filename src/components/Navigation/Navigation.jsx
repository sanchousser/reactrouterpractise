import { NavLink, Outlet } from "react-router-dom"
import css from './Navigation.module.css'


export const Navigation = () => {
    return (
        <>
            <header>
                <nav className={css.nav}>
                    <NavLink className={({isActive}) => (isActive ? css.link__active : css.link)} to="/"> Home </NavLink>
                    <NavLink className={({isActive}) => (isActive ? css.link__active : css.link)} to="/books"> Books </NavLink>
                    {/* <NavLink to="/products">Products</NavLink> */}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>



    )
}