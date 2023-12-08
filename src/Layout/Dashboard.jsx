import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu text-black">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="addItems"><FaUtensils />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="manageItems"><FaListAlt />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="manageBookings"><FaBook />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="users"><FaUsers />All Users</NavLink>
                            </li>
                        </>
                        : <>
                            <li>
                                <NavLink to="userHome"><FaHome />User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="reservation"><FaCalendar />Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="cart"><FaShoppingCart />My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="review"><FaAd />Add a Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="paymentHistory"><FaList />Payment History</NavLink>
                            </li>
                        </>
                    }

                    <div className="divider color">or</div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaSearch />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 mx-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;