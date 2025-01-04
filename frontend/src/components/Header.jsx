import { BiBell } from 'react-icons/bi';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:p-8">
      <div className="relative ml-12 md:ml-0">
        <input
          type="text"
          placeholder="Search"
          className="bg-dark-light text-white pl-10 pr-4 py-2 rounded-lg w-full md:w-80 focus:outline-none"
        />
        <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-gray-400">09 January, 2024 16:12</span>
        <button className="p-2 hover:bg-dark-light rounded-lg">
          <BiBell size={20} />
        </button>
        <button className="flex items-center gap-2 p-2 hover:bg-dark-light rounded-lg">
          <span>🇩🇪</span>
          <span className="hidden md:inline">DE</span>
        </button>
      </div>
    </header>
  );
}

export default Header;