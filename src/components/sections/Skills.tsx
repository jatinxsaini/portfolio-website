import Image from 'next/image';
import { skillsData } from '@/data/skills';
import { SectionHeading } from '../ui/SectionHeading';

export const Skills = () => {
  return (
    <section id="skills" className="skills-section py-10 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1280px] mx-auto">
        <SectionHeading badge="TOOLBOX" title="What I build with" />

        <div className="skills-list">
          {skillsData.map((category) => (
            <div key={category.id} className="skills-row">
              <h3 className="skills-row-label">{category.title}</h3>
              <ul className="skills-pills">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skill-pill${skill.iconPath ? '' : ' skill-pill--text-only'}`}
                  >
                    {skill.iconPath && (
                      <span className="skill-pill-icon" aria-hidden="true">
                        <Image src={skill.iconPath} alt="" width={26} height={26} />
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
