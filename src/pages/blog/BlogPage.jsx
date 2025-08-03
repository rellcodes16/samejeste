import { useParams } from 'react-router-dom';
import { useGetBlogBySlug } from '../../hooks/useGetBlogBySlug';
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import BlogIntroPage from './BlogIntroPage';
import RelatedBlogs from './RelatedBlogs';
import Socials from '../home/Socials';
import blogMap from './BlogMap'; 
import LoadingScreen from '../../UI/Loading';
import ErrorScreen from '../../UI/Error';
import BackToBlog from './BackToBlog';
import { useGetRelatedBlogs } from '../../hooks/useGetRelatedBlogs';

function BlogPage() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGetBlogBySlug(slug);
  const { isLoading: isLoadingRelatedBlog } = useGetRelatedBlogs
  const blog = data?.data;
  console.log(blog)

  if (isLoading || isLoadingRelatedBlog) return <LoadingScreen />;
  if (isError || !blog) return <ErrorScreen />;

  const blogData = blogMap[slug];
  const BlogComponent = blogData?.component;
  const readTime = blogData?.readTime;


  return (
    <div>
      <Header />
      <BackToBlog />
      <BlogIntroPage blog={blog} readTime={readTime} />
      <div className="lg:flex gap-3 px-15 items-start">
        {BlogComponent && <BlogComponent blog={blog} />}
        <RelatedBlogs tags={blog.tags} slug={blog._id} />
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default BlogPage
