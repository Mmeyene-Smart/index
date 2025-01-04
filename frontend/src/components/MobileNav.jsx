import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHistory, AiOutlineWallet, AiOutlineMenu } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 left-4 z-50 p-2 bg-darker rounded-lg"
      >
        <AiOutlineMenu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
          <aside className="w-64 h-full bg-darker p-8 transform transition-transform duration-200">
            <div className="text-2xl font-bold mb-8">CRYPTO</div>
            <nav className="space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
                }
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineHome size={20} /> Home
              </NavLink>
              <NavLink 
                to="/market" 
                className={({ isActive }) => 
                  `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
                }
                onClick={() => setIsOpen(false)}
              >
                <BiTrendingUp size={20} /> Market
              </NavLink>
              <NavLink 
                to="/history" 
                className={({ isActive }) => 
                  `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
                }
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineHistory size={20} /> History
              </NavLink>
              <NavLink 
                to="/wallet" 
                className={({ isActive }) => 
                  `flex items-center gap-2 p-3 ${isActive ? 'bg-dark-light text-white' : 'text-gray-400 hover:bg-dark-light'} rounded-lg`
                }
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineWallet size={20} /> Wallet
              </NavLink>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

export default MobileNav;