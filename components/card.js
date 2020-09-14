import Link from "next/link";
const Card = () => (
  <>
    <div className="card">
      <div className="card-header">
        <img src="images/blog.PNG" alt="" />
      </div>
      <div className="card-main">
        <h1>Theis is title header</h1>
        <p>By Zeyad</p>
      </div>
      <div className="card-footer flex-container">
        <Link href="article">
          <a>Read more</a>
        </Link>
        <p>19 sept, 2020</p>
      </div>
    </div>
  </>
);

export default Card;
