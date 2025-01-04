import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';





import React, { useState, useEffect } from "react";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically show the modal when the page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="h-[50px] w-[210px] ">

              <h2 className="text-lg font-semibold">Terms & Conditions</h2>
              </div>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-700 overflow-y-auto max-h-72">
              <p>
                Welcome to our platform! By using our services, you agree to the
                following terms and conditions:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-2">
                <li>
                  You shall not misuse the services provided by this platform.
                </li>
                <li>
                  Any information you provide must be accurate and up to date.
                </li>
                <li>
                  Your account is your responsibility. Keep your credentials
                  secure.
                </li>
                <li>
                  We reserve the right to modify these terms at any time.
                </li>
              </ul>
              <p className="mt-4">
                By continuing to use our services, you acknowledge that you
                have read and understood these terms. Thank you for being part
                of our community!
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={closeModal}
              >
                Decline
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  closeModal();
                }}
              >
          <Link to='https://jade-bonbon-0d76e6.netlify.app/'>
          
                Accept
          </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
