import Link from 'next/link';
import Layout from '../components/Layout';
import { articles } from '../profile';

const Article = ({ art }) => {
  return (
    <div className="col-md-4">
      <div className="card p-2">
        <div className="overflow">
          <img
            src={art.imgURL}
            alt=""
            className="img-fluid h-40 card-img-top"
          />
        </div>
        <div className="card-body ">
          <h3>{art.title}</h3>
          <p>{art.description}</p>
          <Link href={`/post?title=${art.title}`} as={`/post/${art.title}`}>
            <button className="btn btn-dark ">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
const Blog = () => (
  <Layout footer={false}>
    <h1>Blog</h1>
    <div className="row">
      {articles.map((i, index) => (
        <Article art={i} key={index} />
      ))}
    </div>
  </Layout>
);
export default Blog;
