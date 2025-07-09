import React from 'react';
import { Link, MessageSquare, User } from 'lucide-react';

const tabs = [
  { id: 'url', label: 'URL', icon: Link },
  { id: 'text', label: 'Text', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: User }
];

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${
            activeTab === id
              ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
