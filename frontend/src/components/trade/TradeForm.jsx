import { useState } from 'react';

function TradeForm({ asset, onClose }) {
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('market');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle trade logic here
    console.log('Trade submitted:', { asset, tradeType, orderType, amount });
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">
          {asset ? `Trade ${asset.name}` : 'New Trade'}
        </h3>
        
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg transition-colors ${
              tradeType === 'buy' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-dark hover:bg-gray-800'
            }`}
            onClick={() => setTradeType('buy')}
          >
            Buy
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg transition-colors ${
              tradeType === 'sell' 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-dark hover:bg-gray-800'
            }`}
            onClick={() => setTradeType('sell')}
          >
            Sell
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg transition-colors ${
              orderType === 'market' 
                ? 'bg-purple-600' 
                : 'bg-dark hover:bg-gray-800'
            }`}
            onClick={() => setOrderType('market')}
          >
            Market
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg transition-colors ${
              orderType === 'limit' 
                ? 'bg-purple-600' 
                : 'bg-dark hover:bg-gray-800'
            }`}
            onClick={() => setOrderType('limit')}
          >
            Limit
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Amount ({asset?.symbol})
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-dark p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="0.00"
          required
        />
      </div>

      {orderType === 'limit' && (
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Limit Price (USD)
          </label>
          <input
            type="number"
            className="w-full bg-dark p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="0.00"
          />
        </div>
      )}

      {asset && (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Market Price:</span>
            <span>{asset.price}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Total:</span>
            <span>${amount ? (parseFloat(amount) * 45123.45).toFixed(2) : '0.00'}</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className={`w-full py-3 rounded-lg transition-colors ${
          tradeType === 'buy'
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {tradeType === 'buy' ? 'Buy' : 'Sell'} {asset?.symbol}
      </button>
    </form>
  );
}

export default TradeForm;