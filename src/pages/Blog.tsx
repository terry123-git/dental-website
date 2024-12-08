import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import TrendingTopics from '../components/blog/TrendingTopics';
import FeaturedPost from '../components/blog/FeaturedPost';
import { getFeaturedPost, getRecentPosts } from '../data/blogPosts';
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Dental Health Blog</h1>
          <p className="mt-4 text-xl">Stay informed about the latest in dental care</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection className="mb-12">
          <FeaturedPost post={featuredPost} />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </AnimatedSection>
          </div>
          
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

export default Blog;