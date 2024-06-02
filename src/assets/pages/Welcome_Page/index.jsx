// ! WelcomePage Component
import "./welcomeP.scss";
import Image from "../../images/picture/welcome-page-team-work.svg"

const WelcomePage = () => {
  return (
    <section id="welcome-page">
      <main className="main-content">
        <div className="wrapper">
          <div className="text_content">
            <h2 className="section_title">
              Realize your idea, your startups as a team]
              .
            </h2>
            <p className="secondary_title">
              Here you can find every proposal.
            </p>
            <div className="start-btn">
              <a href="">
                Start the journey
              </a>
            </div>
          </div>
          <div className="image_content">
             <img src={Image} alt="" />
             <div className="btn-overlay btn-1">Project Manager</div>
             <div className="btn-overlay btn-2">Marketing</div>
             <div className="btn-overlay btn-3">Investor</div>
             <div className="btn-overlay btn-6">Founder</div>
             <div className="btn-overlay btn-5">Developer</div>
             <div className="btn-overlay btn-4">Designer</div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default WelcomePage;
