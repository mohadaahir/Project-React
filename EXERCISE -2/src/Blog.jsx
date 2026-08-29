import Header from './Header';
import Post from './Post';
import Footer from './Footer';

const Blog = () => {
  return (
    <div className="blog-page">
      <Header />
      <main className="blog-content">
        <Post />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
