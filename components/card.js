import Link from "next/link";
const Card = (props) => (
  <>
    {console.log(props)}
    <div className="card">
      <div className="card-header">
        <img src={props.props.image} alt="" />
      </div>
      <div className="card-main">
        <h1>
          {props.props.title.length > 20
            ? props.props.title.substr(0, 20) + "..."
            : props.props.title}
        </h1>

        <p>By {props.props.athor}</p>
      </div>
      <div className="card-footer flex-container">
        <Link href={`articles/${props.props.id}`}>
          <a>Read more</a>
        </Link>
        <p>19 sept, 2020</p>
      </div>
    </div>
  </>
);

export default Card;
