import { motion as m } from "framer-motion";

const CTA = () => {
  return (
    <m.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="CTA">
        <m.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          Available for agency and freelance work</m.p>
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
            <m.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="CTAAgencyButton" href="mailto:careers@amansinghbhogal.com">
                For Agencies
            </m.a>
            <m.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="CTAClientButton" href="mailto:business@amansinghbhogal.com">
                For Clients
            </m.a>
        </m.div>
    </m.section>
  )
}

export default CTA;