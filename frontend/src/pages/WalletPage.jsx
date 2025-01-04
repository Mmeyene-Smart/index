import RecentStocks from '../components/wallet/RecentStocks';
import StatsCards from '../components/wallet/StatsCards';
import WalletChart from '../components/wallet/WalletChart';


function WalletPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <StatsCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <WalletChart />
        </div>
        <div>
          <RecentStocks />
        </div>
      </div>
    </div>
  );
}

export default WalletPage;