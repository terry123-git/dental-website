import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trendingTopics = [
  {
    id: 1,
    title: 'Latest Advances in Invisible Aligners',
    views: '2.5k',
    category: 'Orthodontics'
  },
  {
    id: 2,
    title: 'The Impact of AI in Dental Diagnostics',
    views: '1.8k',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'Sustainable Practices in Modern Dentistry',
    views: '1.2k',
    category: 'Eco-Dentistry'
  }
];

const TrendingTopics = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold">Trending in Dentistry</h2>
      </div>
      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <motion.div
            key={topic.id}
            whileHover={{ x: 5 }}
            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
          >
            <Link to={`/blog/${topic.id}`} className="group">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>{topic.category}</span>
                <span>{topic.views} views</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Link
        to="/blog"
        className="mt-6 flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        View all topics
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default TrendingTopics;