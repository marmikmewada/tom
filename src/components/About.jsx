// // About.js

// import React from "react";

// const About = () => {
//   return (
//     <div id="about" className="about-section">
//       <h2>About Us</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
//     </div>
//   );
// };

// export default About;

import styles, { layout } from "../style";
import Button from "./Button";

const ServiceCard = ({ title, description }) => (
  <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card`}>
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

const About = () =>  (
  <section id="about" className={`${layout.section} ${styles.paddingY} ${styles.paddingX} lg:px-16 xl:px-24`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Us</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Metapay Group is your trusted partner for strategic business solutions. We bring a wealth of expertise across various industries to address your organization's unique challenges and opportunities.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <h3 className="font-poppins font-semibold text-white text-[24px] leading-[30px] mb-6">Our Consultancy Services</h3>
      <ServiceCard
        title="Strategic Management Consulting"
        description="We specialize in helping businesses develop and implement strategic plans to navigate complex market landscapes and achieve long-term objectives."
      />
      <ServiceCard
        title="Financial Advisory Services"
        description="Our financial experts provide comprehensive advisory services, including financial analysis, risk management, investment strategy development, and support."
      />
      <ServiceCard
        title="Operations Consulting"
        description="We optimize business operations by identifying inefficiencies, streamlining processes, and implementing best practices to enhance productivity and reduce costs."
      />
      <ServiceCard
        title="Human Resources Consulting"
        description="Our HR consultants offer strategic guidance on talent acquisition, performance management, employee engagement, and organizational development to foster a high-performing workforce."
      />
      <ServiceCard
        title="Marketing and Branding Consulting"
        description="We devise innovative marketing strategies, conduct market research, and develop branding initiatives to help businesses effectively engage with their target audience and differentiate themselves in competitive markets."
      />
      <ServiceCard
        title="Technology IT Consulting"
        description="Our IT experts provide guidance on digital transformation, IT infrastructure optimization, cybersecurity, and software implementation to improve business efficiency."
      />
      <ServiceCard
        title="Legal and Regulatory Compliance Consulting"
        description="Our legal experts offer guidance on regulatory compliance, contract negotiation, intellectual property protection, and risk mitigation."
      />
    </div>
  </section>
);

export default About;



