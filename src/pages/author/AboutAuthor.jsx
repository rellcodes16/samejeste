import { Facebook, InstagramIcon } from "lucide-react";
import { FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import { useGetBlogsByAuthor } from "../../hooks/useGetAuthor";
import { useParams } from "react-router-dom";

const detectPlatform = (url) => {
  if (url.includes("twitter.com")) return "twitter";
  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("facebook.com")) return "facebook";
  if (url.includes("linkedin.com")) return "linkedin";
  if (url.includes("linktr.ee")) return "linktree";
  if (url.includes("linktree.com")) return "linktree";
  return "website";
};

const getSocialIcon = (platform) => {
  switch (platform) {
    case "twitter":
      return <FaTwitter className="text-coral-500" />;
    case "instagram":
      return <InstagramIcon className="text-coral-500" />;
    case "facebook":
      return <Facebook className="text-coral-500" />;
    case "linkedin":
      return <FaLinkedin className="text-coral-500" />;
    case "linktree":
      return <FaLink className="text-coral-500" />;
    default:
      return <FaLink className="text-coral-500" />;
  }
};

const formatLabel = (url, platform) => {
  try {
    const parsed = new URL(url);
    const lastSegment = parsed.pathname.split("/").filter(Boolean).pop();

    if (["twitter", "instagram", "linktree"].includes(platform)) {
      return `@${lastSegment}`;
    } else if (platform === "linkedin") {
      return lastSegment;
    } else {
      return parsed.hostname.replace("www.", "");
    }
  } catch {
    return url;
  }
};

export default function AboutAuthor() {
  const { authorId } = useParams();
  const { data } = useGetBlogsByAuthor(authorId);

  const author = data || {};
  const { name, about, pfp, mediaURL = [] } = author;

  return (
    <section className="max-w-6xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 shadow-md">
        <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-md flex-shrink-0">
          <img
            src={pfp}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{name}</h2>

          <p className="mt-4 text-gray-700 leading-relaxed">{about}</p>

          {mediaURL.length > 0 && (
            <div className="mt-6 space-y-3">
              <p className="font-medium text-gray-600">Connect with {name.split(" ")[0]}:</p>
              {mediaURL.map((url) => {
                const platform = detectPlatform(url);
                return (
                  <div key={url} className="flex items-center justify-center lg:justify-start gap-2">
                    {getSocialIcon(platform)}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF5C5C] hover:underline break-all"
                    >
                      {formatLabel(url, platform)}
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
