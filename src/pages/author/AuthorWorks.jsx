import AuthorBlogCards from "./AuthorBlogCards";

function AuthorWorks() {
  return (
    <section className="px-4 md:px-12 lg:px-25 py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-900 whitespace-nowrap mr-4">
            Featured writing by the Author
          </h2>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>


        <AuthorBlogCards />
      </div>
    </section>
  );
}

export default AuthorWorks;
