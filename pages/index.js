import Layout from '../components/Layout';
import { skills, projects, experiences } from '../profile';
import Link from 'next/link';
const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="Perfil.jpg" className="img-fluid h-50 " alt="perfil" />
            </div>
            <div className="col-md-8">
              <h1>Javier Perez</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas dolore aliquid ipsum delectus. In atque velit
                doloremque, nostrum debitis recusandae iusto id nihil eius qui
                distinctio, eaque sit quod? Tempora. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Doloribus obcaecati, commodi porro
                expedita quas culpa, architecto ea ad reiciendis ab odit neque
                ipsa similique incidunt perspiciatis vel illum rerum possimus?
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* secon section  */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>skills</h1>
            {skills.map((i, index) => (
              <div className="py-3" key={index}>
                <h5>{i.skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${i.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, from, to, description }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio  */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ title, description, image }) => (
              <div className="col-md-4 p-2" key={title}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#">know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Index;
