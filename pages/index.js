// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/card";
const Home = ({ posts }) => (
  <>
    <section className="header-section">
      <img src="images/cover.png" />
      <div className="overlay">
        <div className="container">
          <h1>First Blog.</h1>
          <p>Made by Zeyad Tareq</p>
        </div>
      </div>
    </section>
    <section className="container">
      <div className="grid-view">
        {posts.articles.map(
          (post) => (
            <Card key={post.id} props={post} />
          )
          // console.log(singleItem)
        )}
      </div>
    </section>
  </>
);

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://mashriq.herokuapp.com/dash/v1/articles");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Home;
