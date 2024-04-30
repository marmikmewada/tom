import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Optimized Human resource <br className="sm:block hidden" /> consulting.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Offering strategic guidance on talent acquisition, performance management, employee engagement, and organizational development to cultivate a high-performing workforce.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
