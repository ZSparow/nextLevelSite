import moment from "moment";

const Article = ({ post }) => (
  <>
    <main>
      <section class="container">
        <div class="flex-container">
          <div>
            <h1>{post.article.title}</h1>
            <p>By {post.article.athor}</p>
          </div>
          <small>{moment(post.article.createdAt).format("ll")}</small>
        </div>
      </section>

      <section class="container">
        <img src={post.article.image} />
      </section>
      <section class="container">
        <div dangerouslySetInnerHTML={{ __html: post.article.text }}></div>
      </section>
    </main>
  </>
);

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `http://mashriq.herokuapp.com/dash/v1/article/${context.params.id}`
  );
  const post = await res.json();

  // Pass data to the page via props
  return { props: { post } };
}

// export async function getStaticPaths() {
//   const res = await fetch("http://mashriq.herokuapp.com/dash/v1/articles");
//   const posts = await res.json();

//   const paths = posts.articles.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(
//     `http://mashriq.herokuapp.com/dash/v1/article/${params.id}`
//   );
//   const post = await res.json();

//   // Pass post data to the page via props
//   return { props: { post } };
// }

export default Article;
