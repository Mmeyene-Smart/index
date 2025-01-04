import { BsEyeFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';

function StatsCard({ icon, title, value, subValue }) {
  return (
    <div className="bg-dark-light p-6 rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-dark rounded-lg">
          {icon}
        </div>
        <span className="text-gray-400">{title}</span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-400">{subValue}</div>
    </div>
  );
}

function StatsCards() {
  return (
    <>
      <StatsCard
        icon={<FaWallet size={24} className="text-purple-500" />}
        title="Total assets"
        value="$ 87,743"
        subValue="N120,000.00"
      />
      <StatsCard
        icon={<BsEyeFill size={24} className="text-purple-500" />}
        title="Total deposits"
        value="$ 78,342"
        subValue="N120,000,000.00"
      />
      <StatsCard
        icon={<IoTrendingUp size={24} className="text-purple-500" />}
        title="APY"
        value="+ 12.3%"
        subValue=""
      />
    </>
  );
}

export default StatsCards;