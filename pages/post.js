import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { articles } from '../profile';

const Post = () => {
  const router = useRouter();
  console.log(router.query.title);
  const currentArticle = articles.filter(
    (post) => post.title === router.query.title
  )[0];
  console.log(currentArticle);
  return (
    <Layout footer={false}>
      <div className="row text-center">
        <h1>{currentArticle.title}</h1>
      </div>
      <div className="container text-center">
        <p>{currentArticle.description}</p>
        <div className="text-center ">
          <img
            src={currentArticle.imgURL}
            alt=""
            className="img-fluid center "
            style={{ width: '50%' }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;
