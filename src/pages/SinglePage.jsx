import { Suspense } from "react";
import {
  Await,
  Link,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

const Post = () => {
  const post = useAsyncValue();

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <>
          <h3>{comment.emai}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="container">
      <button onClick={goBack} style={{ width: "100px" }}>
        Go Back
      </button>
      {post && (
        <>
          <Suspense fallback={<h2>Post is Loading...</h2>}>
            <Await resolve={post}>
              <Post />
            </Await>
          </Suspense>
          <Suspense fallback={<h2>Comments is Loading...</h2>}>
            <Await resolve={comments}>
              <Comments />
            </Await>
          </Suspense>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

export const postLoader = async ({ params }) => {
  console.log(params);
  const id = params.id;

  return defer({
    post: await getPostById(id),
    id,
    comments: getCommentsByPost(id),
  });
};

export default SinglePage;
