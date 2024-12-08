import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/blog/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex items-center space-x-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;