import { useGetBlogs } from "../../hooks/useGetBlogs"
import { useFeaturedBlog } from "../../hooks/useGetRecentBlog"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LoadingScreen from "../../UI/Loading"
import Socials from "../home/Socials"
import BlogList from "./BlogList"
import Featured from "./Featured"

function BlogPost() {
  const { isLoading: isLoadingList } = useGetBlogs({
    page: 1,
    limit: 9,
    search: ''
  });

  const { isLoading: isLoadingFeatured } = useFeaturedBlog();

  if (isLoadingList || isLoadingFeatured) return <LoadingScreen />;

  return (
    <div>
      <Header />
      <Featured />
      <BlogList />
      <Socials />
      <Footer />
    </div>
  );
}

export default BlogPost;
