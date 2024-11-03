import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className=" text-white flex items-center h-24 mt-5 ">
            <div className="  flex justify-between rounded-t-lg items-center bg-purple-500  h-full">
                <div className="">Gadget Heaven</div>
                <div className="">
                    <ul className=" flex items-center gap-5">
                        <NavLink><li>Home</li></NavLink>
                        <NavLink><li>Home</li></NavLink>
                        <NavLink><li>Home</li></NavLink>
                    </ul>
                </div>
                <div className=" flex items-center gap-3">
                    <button>cart</button>
                    <button>wish</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
