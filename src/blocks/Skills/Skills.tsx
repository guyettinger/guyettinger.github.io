'use client';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const MotionDiv = motion.div;

interface SkillCardProps {
  children: ReactNode;
  backgroundColor?: string;
}

const SkillCard = ({ children, backgroundColor = '#ffffff' }: SkillCardProps) => {
  return (
    <Card className="p-0 shadow-sm rounded-md">
      <MotionDiv
        className="flex items-center justify-center gap-2 py-4 rounded-md"
        whileHover={{ backgroundColor }}
      >
        {children}
      </MotionDiv>
    </Card>
  );
};

export const Skills = () => {
  return (
    <section className="py-2">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
        <SkillCard backgroundColor="#61DAFB90">
          <i className="fa-brands fa-react react-icon text-xl" />
          <span>React</span>
        </SkillCard>
        <SkillCard backgroundColor="#303c52">
          <i className="fa-brands fa-react react-native-icon text-xl" />
          <span>React Native</span>
        </SkillCard>
        <SkillCard backgroundColor="#264DE490">
          <i className="fa-brands fa-t typescript-icon text-xl" />
          <span>Typescript</span>
        </SkillCard>
        <SkillCard backgroundColor="#F7DF1E90">
          <i className="fa-brands fa-js-square js-icon text-xl" />
          <span>JavaScript</span>
        </SkillCard>
        <SkillCard backgroundColor="#33993390">
          <i className="fa-brands fa-node-js node-icon text-xl" />
          <span>Node</span>
        </SkillCard>
        <SkillCard backgroundColor="#f1da4890">
          <i className="fa-brands fa-python python-icon text-xl" />
          <span>Python</span>
        </SkillCard>
        <SkillCard backgroundColor="#1eabf790">
          <i className="fa-brands fa-golang golang-icon text-xl" />
          <span>Golang</span>
        </SkillCard>
        <SkillCard backgroundColor="#E34F2690">
          <i className="fa-brands fa-angular angular-icon text-xl" />
          <span>Angular</span>
        </SkillCard>
        <SkillCard backgroundColor="#af1ef790">
          <i className="fa-brands fa-microsoft code-icon text-xl" />
          <span>C#</span>
        </SkillCard>
        <SkillCard backgroundColor="#E34F2690">
          <i className="fa-brands fa-html5 html-icon text-xl" />
          <span>HTML</span>
        </SkillCard>
        <SkillCard backgroundColor="#264DE490">
          <i className="fa-brands fa-css3-alt css-icon text-xl" />
          <span>CSS</span>
        </SkillCard>
        <a
          href="https://www.linkedin.com/in/guyettinger/details/skills/"
          target="_blank"
          className="block"
        >
          <SkillCard backgroundColor="#264DE490">
            <i className="fa-solid fa-ellipsis css-icon text-xl" />
          </SkillCard>
        </a>
      </div>
    </section>
  );
};
