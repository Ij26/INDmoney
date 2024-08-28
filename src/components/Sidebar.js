import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSun, FaMoon } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState({
    invest: false,
    indstocks: false,
    usStocks: false,
    etfs: false,
    features: false,
    calculators: false,
    market: false,
    marketMovers: false,
    stockCategory: false,
    disclosure: false,
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggle = (section) => {
    setOpen({ ...open, [section]: !open[section] });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`p-4 md:w-1/3 sm:w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="flex justify-between mb-4">
        <button className="bg-green-500 text-white py-2 px-6 rounded-full inline-block">
          Open Demat Account
        </button>
        <button onClick={toggleDarkMode} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="space-y-2">
        {/* Invest Dropdown */}
        <div>
          <button
            className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            onClick={() => toggle("invest")}
          >
            Invest
            {open.invest ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open.invest && (
            <div>
              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("indstocks")}
              >
                INDstocks
                {open.indstocks ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.indstocks && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/stocks"
                    className="block py-1 pl-4"
                  >
                    Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/sip-in-stocks"
                    className="block py-1 pl-4"
                  >
                    SIP in Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/indices"
                    className="block py-1 pl-4"
                  >
                    Indices
                  </a>
                  <a
                    href="https://www.indmoney.com/ipo"
                    className="block py-1 pl-4"
                  >
                    IPO
                  </a>
                  <a
                    href="https://www.indmoney.com/futures-and-options"
                    className="block py-1 pl-4"
                  >
                    Futures & Options
                  </a>
                </div>
              )}

              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("usStocks")}
              >
                US Stocks
                {open.usStocks ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.usStocks && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/us-stocks"
                    className="block py-1 pl-4"
                  >
                    US Stocks
                  </a>
                </div>
              )}

              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("etfs")}
              >
                ETFs
                {open.etfs ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.etfs && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories"
                    className="block py-1 pl-4"
                  >
                    Global ETFs
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/gold-etfs"
                    className="block py-1 pl-4"
                  >
                    Gold ETFs
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/etf"
                    className="block py-1 pl-4"
                  >
                    All ETFs
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features Dropdown */}
        <div>
          <button
            className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            onClick={() => toggle("features")}
          >
            Features
            {open.features ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open.features && (
            <div>
              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("calculators")}
              >
                Calculators
                {open.calculators ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.calculators && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/calculators/sip-calculator"
                    className="block py-1 pl-4"
                  >
                    SIP Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/brokerage-calculator"
                    className="block py-1 pl-4"
                  >
                    Brokerage Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/swp-calculator"
                    className="block py-1 pl-4"
                  >
                    SWP Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/direct-regular-mutual-funds"
                    className="block py-1 pl-4"
                  >
                    Regular vs Direct MF Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/lumpsum-calculator"
                    className="block py-1 pl-4"
                  >
                    Lumpsum Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/gst-calculator"
                    className="block py-1 pl-4"
                  >
                    GST Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/nps-calculator"
                    className="block py-1 pl-4"
                  >
                    NPS Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/post-office-rd-calculator"
                    className="block py-1 pl-4"
                  >
                    Post Office RD Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/salary-calculator"
                    className="block py-1 pl-4"
                  >
                    Salary Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/gratuity-calculator"
                    className="block py-1 pl-4"
                  >
                    Gratuity Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators/mutual-funds-returns-calculator"
                    className="block py-1 pl-4"
                  >
                    Mutual Fund Returns Calculator
                  </a>
                  <a
                    href="https://www.indmoney.com/calculators"
                    className="block py-1 pl-4"
                  >
                    View all Calculators
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Market Dropdown */}
        <div>
          <button
            className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            onClick={() => toggle("market")}
          >
            Market
            {open.market ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open.market && (
            <div>
              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("marketMovers")}
              >
                Market Movers
                {open.marketMovers ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.marketMovers && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/market"
                    className="block py-1 pl-4"
                  >
                    Stock Market Today
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/52-week-high"
                    className="block py-1 pl-4"
                  >
                    52 Week High
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/52-week-low"
                    className="block py-1 pl-4"
                  >
                    52 Week Low
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/top-gainers"
                    className="block py-1 pl-4"
                  >
                    Top Gainers
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/top-losers"
                    className="block py-1 pl-4"
                  >
                    Top Losers
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/only-buyers"
                    className="block py-1 pl-4"
                  >
                    Only Buyers
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/only-sellers"
                    className="block py-1 pl-4"
                  >
                    Only Sellers
                  </a>
                </div>
              )}

              <button
                className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                onClick={() => toggle("stockCategory")}
              >
                Stock Category
                {open.stockCategory ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.stockCategory && (
                <div
                  className={`text-gray-600 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <a
                    href="https://www.indmoney.com/stocks/category/buy-stocks"
                    className="block py-1 pl-4"
                  >
                    Stocks to buy today
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/penny-stocks"
                    className="block py-1 pl-4"
                  >
                    Penny Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/multibagger-stocks"
                    className="block py-1 pl-4"
                  >
                    Multi-bagger Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/nifty-50-stocks"
                    className="block py-1 pl-4"
                  >
                    Nifty 50 Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/large-cap-stocks"
                    className="block py-1 pl-4"
                  >
                    Large Cap Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/mid-cap-stocks"
                    className="block py-1 pl-4"
                  >
                    Mid Cap Stocks
                  </a>
                  <a
                    href="https://www.indmoney.com/stocks/category/small-cap-stocks"
                    className="block py-1 pl-4"
                  >
                    Small Cap Stocks
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div>
          <a
            href="https://www.indmoney.com/pricing?type=indian-stocks"
            className="flex justify-between items-center w-full py-2 pl-0 text-left bg-white"
          >
            Pricing
          </a>
        </div>

        {/* Disclosure Dropdown */}
        <div>
          <button
            className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            onClick={() => toggle("disclosure")}
          >
            Disclosure
            {open.disclosure ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open.disclosure && (
            <div
              className={`text-gray-600 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <a
                href="https://www.indmoney.com/complaints-status"
                className="block py-1 pl-4"
              >
                Complaint Status
              </a>
              <a
                href="https://www.indmoney.com/sebi-investor-charter"
                className="block py-1 pl-4"
              >
                SEBI Investor Charter - Investment Advisor
              </a>
              <a
                href="https://www.indmoney.com/page/policy-center"
                className="block py-1 pl-4"
              >
                More
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
