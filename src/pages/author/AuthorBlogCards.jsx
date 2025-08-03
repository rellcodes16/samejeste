import { useParams } from "react-router-dom";
import ErrorScreen from "../../UI/Error";
import LoadingScreen from "../../UI/Loading";
import { useGetBlogsByAuthor } from "../../hooks/useGetAuthor";
import BlogCard from "../blog/BlogCard";

function AuthorBlogCards() {
  const { authorId } = useParams(); 
  const { data: authorblogs } = useGetBlogsByAuthor(authorId);
  // console.log(authorblogs)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {authorblogs.blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          thumbnail={blog.thumbnail}
          title={blog.title}
          lead={blog.lead}
          authorName={authorblogs.name}
          authorPfps={authorblogs.pfp}
          createdAt={blog.createdAt}
          tags={blog.tags}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}

export default AuthorBlogCards;
