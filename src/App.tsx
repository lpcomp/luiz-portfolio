import GlobalStyles from '@/lib/styles/GlobalStyles';
import Avatar from '@/components/avatar';
import WorkExperience from '@/components/workExperience';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Languages from './components/languages';
import Footer from '@/components/footer';
import ContactInfo from '@/components/contactInfo';

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
                  <ContactInfo>
                    <ContactInfo.Item icon="fa-briefcase" text="Software Engineer | Software Developer | System Analyst" />
                    <ContactInfo.Item icon="fa-home" text="Rio de Janeiro, BRA" />
                    <ContactInfo.Item icon="fa-envelope" text="luizv993@gmail.com" />
                    <ContactInfo.Item icon="fa-phone" text="+55 21 99701-3533" />
                    <ContactInfo.Item icon="fa-linkedin" text="linkedin.com/in/luiz-paulo" link="https://www.linkedin.com/in/luiz-paulo-ba%C3%A7al-de-vasconcelos/" />
                    <ContactInfo.Item icon="fa-github" text="github.com/lpcomp" link="https://github.com/lpcomp" />                    
                  </ContactInfo>
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
