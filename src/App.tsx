import { BrowserRouter } from "react-router-dom";
import {
  DesktopNavbar,
  MobileNavbar,
  Header,
  AboutMe,
  Skills,
  Projects,
  ContactMe,
} from "./components/";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <DesktopNavbar />
        <MobileNavbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
