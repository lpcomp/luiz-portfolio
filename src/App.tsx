import GlobalStyles from '@/lib/styles/GlobalStyles';
import Avatar from '@/components/avatar';
import WorkExperience from '@/components/workExperience';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Languages from './components/languages';
import Footer from '@/components/footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <main className="w3-light-grey">
        <div className="w3-content w3-margin-top wrap-app">
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <Avatar />
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

                  <Skills />
                  <br />

                  <Languages />
                  <br />
                </div>
              </div>
              <br />
            </div>

            <div className="w3-twothird">
              <WorkExperience />
              <Education />              
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
