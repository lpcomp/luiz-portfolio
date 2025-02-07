import GlobalStyles from './lib/styles/GlobalStyles';
import { Content } from './styles';
import avatar from './assets/images/me.jpg';

import handleSkills from './lib/utils/skills';
import WorkExperience from './components/workExperience';

function App() {

  return (
    <>
      <GlobalStyles />
      <Content className="w3-light-grey">
        <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img
                    src={avatar}
                    style={{ width: '100%' }}
                    alt="Avatar"
                    loading="lazy"
                  />
                  <div
                    className="w3-display-bottomleft w3-container w3-text-black"
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(0, 150, 136, 0.6)',
                    }}
                  >
                    <h2 style={{ color: 'white' }}>Luiz Paulo</h2>
                  </div>
                </div>
                <div className="w3-container">
                  <p className="medium-text">
                    <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    Software Engineer | Software Developer | System Analyst
                  </p>
                  <p className="medium-text">
                    <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    Rio de Janeiro, BRA
                  </p>
                  <p className="medium-text">
                    <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    luizv993@gmail.com
                  </p>
                  <p className="medium-text">
                    <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    +55 21 99701-3533
                  </p>
                  <a
                    href="https://www.linkedin.com/in/luiz-paulo-ba%C3%A7al-de-vasconcelos/"
                    target="_blank"
                    className="medium-text"
                  >
                    <p>
                      <i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      linkedin.com/in/luiz-paulo
                    </p>
                  </a>
                  <a
                    href="https://github.com/lpcomp"
                    target="_blank"
                    className="medium-text"
                  >
                    <p>
                      <i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      github.com/lpcomp
                    </p>
                  </a>
                  <hr />

                  <p className="w3-large">
                    <b>
                      <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                      Skills
                    </b>
                  </p>
                  <section id="skills-list" className="wrap-list">{handleSkills()}</section>
                  <br />

                  <p className="w3-large w3-text-theme">
                    <b>
                      <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                      Languages
                    </b>
                  </p>
                  <section className="wrap-list">
                    <p>Portuguese</p>
                    <p>English</p>
                    <p>Geek 😄</p>
                  </section>
                  <br />
                </div>
              </div>
              <br />
            </div>

            <div className="w3-twothird">
              <WorkExperience />

              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                  Education
                </h2>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Estácio de Sá University</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2018 -
                    2019
                  </h6>
                  <p>Technical Degree in System Development and Analysis</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>University of the State of Rio de Janeiro</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2012 -
                    2018
                  </h6>
                  <p>Incomplete Bachelor's Degree in Computer Science</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Rocketseat</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2022
                  </h6>
                  {/* <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i><span className="w3-tag w3-teal w3-round">Current</span></h6> */}
                  <p>Course on Ignite</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Rocketseat</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2020
                  </h6>
                  <p>Course on GoStack</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>PixStudios</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2014
                  </h6>
                  <p>Course on Game Development</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Prepara</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2011
                  </h6>
                  <p>Web Designer Course</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Caelum</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2010
                  </h6>
                  <p>Course on Java FJ11</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Find me on social media.</p>
          <section className="wrap-social-media">
            <a
              href="https://www.linkedin.com/in/luiz-paulo-ba%C3%A7al-de-vasconcelos/"
              target="_blanck"
            >
              <i className="fa fa-linkedin w3-hover-opacity"></i>
            </a>
            <a
              href="https://www.facebook.com/luiz.vasconcelos.16"
              target="_blanck"
            >
              <i className="fa fa-facebook-official w3-hover-opacity"></i>
            </a>
            <a href="https://www.instagram.com/lpcomp/" target="_blanck">
              <i className="fa fa-instagram w3-hover-opacity"></i>
            </a>
          </section>
          <p>Powered by w3 and modified by me</p>
        </footer>
      </Content>
    </>
    
  );
}

export default App;
