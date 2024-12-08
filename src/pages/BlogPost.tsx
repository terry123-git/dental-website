import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import TrendingTopics from '../components/blog/TrendingTopics';
import AnimatedSection from '../components/AnimatedSection';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-2 py-1 bg-white/20 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/blog"
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="lg:col-span-1">
            <AnimatedSection>
              <TrendingTopics />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;