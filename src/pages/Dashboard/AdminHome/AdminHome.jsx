import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaList, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }

    })
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div className="stats shadow">
  
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook></FaBook>
                    </div>   
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaList></FaList>
                    </div>   
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                </div>
                
            </div>
        </div>
    );
};

export default AdminHome;