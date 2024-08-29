import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSun, FaMoon } from "react-icons/fa";

const menuItems = [
  {
    section: "invest",
    label: "Invest",
    subSections: [
      {
        section: "indstocks",
        label: "INDstocks",
        links: [
          { href: "https://www.indmoney.com/stocks", label: "Stocks" },
          {
            href: "https://www.indmoney.com/stocks/category/sip-in-stocks",
            label: "SIP in Stocks",
          },
          { href: "https://www.indmoney.com/indices", label: "Indices" },
          { href: "https://www.indmoney.com/ipo", label: "IPO" },
          {
            href: "https://www.indmoney.com/futures-and-options",
            label: "Futures & Options",
          },
        ],
      },
      {
        section: "usStocks",
        label: "US Stocks",
        links: [
          { href: "https://www.indmoney.com/us-stocks", label: "US Stocks" },
        ],
      },
      {
        section: "etfs",
        label: "ETFs",
        links: [
          {
            href: "https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories",
            label: "Global ETFs",
          },
          {
            href: "https://www.indmoney.com/stocks/category/gold-etfs",
            label: "Gold ETFs",
          },
          { href: "https://www.indmoney.com/stocks/etf", label: "All ETFs" },
        ],
      },
    ],
  },
  {
    section: "features",
    label: "Features",
    subSections: [
      {
        section: "calculators",
        label: "Calculators",
        links: [
          {
            href: "https://www.indmoney.com/calculators/sip-calculator",
            label: "SIP Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/brokerage-calculator",
            label: "Brokerage Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/swp-calculator",
            label: "SWP Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/direct-regular-mutual-funds",
            label: "Regular vs Direct MF Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/lumpsum-calculator",
            label: "Lumpsum Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/gst-calculator",
            label: "GST Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/nps-calculator",
            label: "NPS Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/post-office-rd-calculator",
            label: "Post Office RD Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/salary-calculator",
            label: "Salary Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/gratuity-calculator",
            label: "Gratuity Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators/mutual-funds-returns-calculator",
            label: "Mutual Fund Returns Calculator",
          },
          {
            href: "https://www.indmoney.com/calculators",
            label: "View all Calculators",
          },
        ],
      },
    ],
  },
  {
    section: "market",
    label: "Market",
    subSections: [
      {
        section: "marketMovers",
        label: "Market Movers",
        links: [
          {
            href: "https://www.indmoney.com/market",
            label: "Stock Market Today",
          },
          {
            href: "https://www.indmoney.com/stocks/category/52-week-high",
            label: "52 Week High",
          },
          {
            href: "https://www.indmoney.com/stocks/category/52-week-low",
            label: "52 Week Low",
          },
          {
            href: "https://www.indmoney.com/stocks/category/top-gainers",
            label: "Top Gainers",
          },
          {
            href: "https://www.indmoney.com/stocks/category/top-losers",
            label: "Top Losers",
          },
          {
            href: "https://www.indmoney.com/stocks/category/only-buyers",
            label: "Only Buyers",
          },
          {
            href: "https://www.indmoney.com/stocks/category/only-sellers",
            label: "Only Sellers",
          },
        ],
      },
      {
        section: "stockCategory",
        label: "Stock Category",
        links: [
          {
            href: "https://www.indmoney.com/stocks/category/buy-stocks",
            label: "Stocks to buy today",
          },
          {
            href: "https://www.indmoney.com/stocks/category/penny-stocks",
            label: "Penny Stocks",
          },
          {
            href: "https://www.indmoney.com/stocks/category/multibagger-stocks",
            label: "Multi-bagger Stocks",
          },
          {
            href: "https://www.indmoney.com/stocks/category/nifty-50-stocks",
            label: "Nifty 50 Stocks",
          },
          {
            href: "https://www.indmoney.com/stocks/category/large-cap-stocks",
            label: "Large Cap Stocks",
          },
          {
            href: "https://www.indmoney.com/stocks/category/mid-cap-stocks",
            label: "Mid Cap Stocks",
          },
          {
            href: "https://www.indmoney.com/stocks/category/small-cap-stocks",
            label: "Small Cap Stocks",
          },
        ],
      },
    ],
  },
  {
    section: "pricing",
    label: "Pricing",
    href: "https://www.indmoney.com/pricing?type=indian-stocks",
  },
  {
    section: "disclosure",
    label: "Disclosure",
    subSections: [
      {
        links: [
          {
            href: "https://www.indmoney.com/complaints-status",
            label: "Complaint Status",
          },
          {
            href: "https://www.indmoney.com/sebi-investor-charter",
            label: "SEBI Investor Charter - Investment Advisor",
          },
          {
            href: "https://www.indmoney.com/page/policy-center",
            label: "More",
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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

  const renderLinks = (links) =>
    links.map((link) => (
      <a key={link.href} href={link.href} className="block py-1 pl-0">
        {link.label}
      </a>
    ));

  const renderMenu = (items) =>
    items.map((item) => (
      <div key={item.section}>
        <button
          className={`flex justify-between items-center w-full py-2 pl-0 text-left ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
          onClick={() => toggleSection(item.section)}
        >
          {item.label}
          {openSections[item.section] ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openSections[item.section] && (
          <div>
            {item.subSections && renderMenu(item.subSections)}
            {item.links && (
              <div
                className={`text-gray-600 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                {renderLinks(item.links)}
              </div>
            )}
          </div>
        )}
      </div>
    ));

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
      <div className="space-y-2">{renderMenu(menuItems)}</div>
    </div>
  );
};

export default Sidebar;
