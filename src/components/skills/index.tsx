import SubHeading from "@/components/subHeading";
import ListSkills from "@/components/skills/components/listSkills";

const Skills = () => {
  return (
    <>        
        <SubHeading title="Skills" icon="fa-asterisk" />
        <section id="skills-list" className="wrap-list">
            <ListSkills />
        </section>
    </>
  );
}

export default Skills;