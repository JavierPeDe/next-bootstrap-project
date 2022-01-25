import Layout from '../components/Layout';
const Github = ({ user }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.login}</h1>
            <img
              src="https://avatars.githubusercontent.com/u/75632114?v=4"
              alt="logo"
            />
            <a
              href={user.blog}
              target="_blanck"
              className="btn btn-outline-secondary my-2"
            >
              My Blog
            </a>
            <a
              href={user.html_url}
              target="_blanck"
              className="btn btn-outline-secondary my-2"
            >
              Go to github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/JavierPeDe');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      user: data,
    },
  };
}
export default Github;
