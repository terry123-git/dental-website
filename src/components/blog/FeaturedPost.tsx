import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-xl overflow-hidden shadow-xl"
    >
      <Link to={`/blog/${post.id}`}>
        <div className="relative h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center space-x-4 text-sm mb-3">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-200 line-clamp-2">{post.excerpt}</p>
            <div className="mt-4 flex items-center space-x-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-2 py-1 bg-white/20 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedPost;