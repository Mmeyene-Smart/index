import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHistory, AiOutlineWallet } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { MdSwapHoriz } from 'react-icons/md';

function Sidebar({ className = '' }) {
  return (
    <aside className={`w-64 min-h-screen bg-darker p-8 ${className}`}>
      <div className="text-2xl font-bold mb-8">CRYPTO</div>
      <nav className="space-y-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
          }
        >
          <AiOutlineHome size={20} /> Home
        </NavLink>
        <NavLink 
          to="/market" 
          className={({ isActive }) => 
            `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
          }
        >
          <BiTrendingUp size={20} /> Market
        </NavLink>
        <NavLink 
          to="/trade" 
          className={({ isActive }) => 
            `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
          }
        >
          <MdSwapHoriz size={20} /> Trade
        </NavLink>
        <NavLink 
          to="/history" 
          className={({ isActive }) => 
            `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
          }
        >
          <AiOutlineHistory size={20} /> History
        </NavLink>
        <NavLink 
          to="/wallet" 
          className={({ isActive }) => 
            `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
          }
        >
          <AiOutlineWallet size={20} /> Wallet
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;