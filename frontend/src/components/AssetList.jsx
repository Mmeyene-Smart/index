import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import { useState } from 'react';
import Modal from './trade/Modal';
import TradeForm from './trade/TradeForm';

const assets = [
  { name: 'CaizCoin', symbol: 'CAIZ', price: '€ 521.30', amount: '260.493', change: '+2.56%', trend: 'up' },
  { name: 'CaizStable', symbol: 'STBL', price: '€ 201.12', amount: '186.230', change: '-1.84%', trend: 'down' },
  { name: 'CaizGold', symbol: 'GOLD', price: '€ 680.22', amount: '0.638', change: '+0.34%', trend: 'up' },
  { name: 'Bitcoin', symbol: 'BTC', price: '€ 730.44', amount: '0.284', change: '-1.09%', trend: 'down' },
  { name: 'Ethereum', symbol: 'ETH', price: '€ 2,843.18', amount: '1.026', change: '+12.36%', trend: 'up' },
];

function AssetList() {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

  const handleTradeClick = (asset) => {
    setSelectedAsset(asset);
    setIsTradeModalOpen(true);
  };

  return (
    <>
      <div className="bg-dark-light p-4 md:p-8 rounded-xl mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold">Assets</h2>
          <div className="flex gap-4 overflow-x-auto w-full sm:w-auto">
            <button className="text-white whitespace-nowrap">Owned</button>
            <button className="text-gray-400 hover:text-white whitespace-nowrap">Watchlist</button>
            <button className="text-gray-400 hover:text-white whitespace-nowrap">See all</button>
          </div>
        </div>

        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.symbol} className="flex flex-col sm:grid sm:grid-cols-6 gap-4 p-4 border-b border-gray-800">
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center flex-shrink-0">
                  {asset.symbol[0]}
                </div>
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-sm text-gray-400">{asset.symbol}</div>
                </div>
              </div>

              <div className="flex justify-between items-center sm:contents">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Amount:</span>
                  <span className="text-gray-400">{asset.amount}</span>
                </div>
                <div className={`flex items-center gap-1 ${asset.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {asset.trend === 'up' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                  {asset.change}
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="w-24 h-8 bg-dark rounded"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:col-span-2">
                <div className="font-medium">{asset.price}</div>
                <button 
                  className="w-full sm:w-auto px-4 py-2 bg-dark hover:bg-gray-800 rounded-lg text-sm"
                  onClick={() => handleTradeClick(asset)}
                >
                  Buy / Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isTradeModalOpen} 
        onClose={() => setIsTradeModalOpen(false)}
      >
        <TradeForm 
          asset={selectedAsset} 
          onClose={() => setIsTradeModalOpen(false)} 
        />
      </Modal>
    </>
  );
}

export default AssetList;