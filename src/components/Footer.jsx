// import styles from "../style";
// import { MetaLight } from "../assets"; // Assuming you have MetaLight imported
// import { footerLinks, socialMedia } from "../constants";
// import { FiCopy } from 'react-icons/fi'; // Import FiCopy icon from react-icons/fi

// const Footer = () => (
//   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
//     <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//       <div className="flex-[1] flex flex-col justify-start mr-10">
//         <img
//           src={MetaLight}
//           alt="MetaPayLOGO"
//           className="w-[266px] h-[72.14px] object-contain"
//         />
//         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
//           A new partner for upscaling business growth
//         </p>
//       </div>

//       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//             <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
//               {footerlink.title}
//             </h4>
//             <ul className="list-none mt-4">
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
//                     index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//       <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
//         Copyright Ⓒ 2022 Metapay Group. All Rights Reserved.
//       </p>

//       <div className="flex flex-row md:mt-0 mt-6 items-center">
//         <div className="flex items-center">
//           <p className="font-poppins font-normal text-white text-[18px] leading-[27px]">info@metapaygroup.com</p>
//           <FiCopy
//             className="text-white ml-2 cursor-pointer"
//             onClick={() => {
//               navigator.clipboard.writeText('info@metapaygroup.com');
//               // Optionally provide feedback to the user that the email has been copied
//               // For example, set a state variable to true for a brief period to show a message
//             }}
//           />
//         </div>
//         <div className="flex flex-row md:mt-0 mt-4">
//           {socialMedia.map((social, index) => (
//             <img
//               key={social.id}
//               src={social.icon}
//               alt={social.id}
//               className={`w-[21px] h-[21px] object-contain cursor-pointer ${
//                 index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
//               }`}
//               onClick={() => window.open(social.link)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Footer;






import styles from "../style";
import { MetaLight } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={MetaLight}
          alt="MetaPayLOGO"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new partner for upscaling business growth
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Metapay Group. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
