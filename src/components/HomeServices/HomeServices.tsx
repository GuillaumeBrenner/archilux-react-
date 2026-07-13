import "./HomeServices.css";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

function HomeServices() {
  const { t } = useTranslation();

  return (
    <section className="home-services">
      <h1 data-aos="fade-up">{t("experience")}</h1>
      <div className="separator" data-aos="fade-down"></div>
      <div className="experience-container" data-aos="fade-up">
        <div className="experience-grid">
          <div className="experience-details">
            <img src="/images/experience.png" alt="" />
            <h2>
              <CountUp end={10} enableScrollSpy scrollSpyOnce />
            </h2>
            <span>{t("years")}</span>
          </div>

          <div className="experience-details">
            <img src="/images/briefing.png" alt="" />
            <h2>
              <CountUp end={85} enableScrollSpy scrollSpyOnce />
            </h2>
            <span>{t("finished")}</span>
          </div>

          <div className="experience-details">
            <img src="/images/happy.png" alt="" />
            <h2 className="clients">
              <CountUp end={90} duration={3} enableScrollSpy scrollSpyOnce />+
            </h2>
            <span>{t("clients")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
