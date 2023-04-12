import { motion as m } from "framer-motion";

const SkillLozenge = () => {
  return (
    <m.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="SkillLozenges">
        <m.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="SkillLozenge">
            WEB DESIGN
        </m.span>
        <m.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="SkillLozenge">
            WEB DEVELOPMENT
        </m.span>
    </m.div>
  )
}

export default SkillLozenge;