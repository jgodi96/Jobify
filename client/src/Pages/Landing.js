import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobifty" className="logo" />
      </nav>
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lacus sed turpis tincidunt id aliquet risus feugiat. Non nisi est
            sit amet facilisis. In eu mi bibendum neque. Ipsum suspendisse
            ultrices gravida dictum fusce ut placerat orci. Faucibus ornare
            suspendisse sed nisi lacus sed viverra tellus in. Neque vitae tempus
            quam pellentesque nec nam aliquam. Blandit volutpat maecenas
            volutpat blandit aliquam etiam erat velit. Natoque penatibus et
            magnis dis parturient. Gravida dictum fusce ut placerat orci nulla
            pellentesque dignissim. Suspendisse in est ante in nibh mauris
            cursus.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
