import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between font-semibold text-lg">
                <div>
                    <img src="https://i.ibb.co/t3KJfbz/Logo.png" alt="" />
                </div>
                <div className="flex gap-10">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/donation'}>Donation</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;