import { React } from "react";
import { useParams, Link } from "react-router-dom";

// svg
import logo from "./image/404.svg";

// icons
import DeleteIcon from "@mui/icons-material/Delete";

const PostPage = ({ posts, onDeleteHandler }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <article>
      {post && (
        <>
          <h3 className="mt-8 ">{post.title}</h3>
          <span className="text-[#758297]">{post.date}</span>
          <p className="mb-4 mt-2">{post.body}</p>
          <button
            type="button"
            onClick={() => onDeleteHandler(id)}
            className="bg-red-600 py-2 px-4 items-center hover:bg-red-700 flex rounded-md"
          >
            <DeleteIcon />
            Delete
          </button>
        </>
      )}

      {!post && (
        <div className="flex flex-col  items-center">
          <img src={logo} alt="404__not-found" />
          <div className="flex flex-col text-center">
            <h2 className="mt-8 font-bold text-[3rem]">Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <Link
              to="/"
              className="underline underline-offset-8 mt-4 hover:text-gray-400"
            >
              Visit Our Homepage
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default PostPage;
