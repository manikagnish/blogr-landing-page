import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import JumbotronLikeThing from "./components/JumbotronLikeThing";

import editorVector from "./images/illustration-editor-mobile.svg";
import laptopVector from "./images/illustration-laptop-mobile.svg";

function App() {
  return (
    <div>
      <HeroSection />
      <FeatureSection
        illustration={editorVector}
        altText="editor illustration"
        mainHeading="Designed for the future"
        heading1="Introducing an extensible editor"
        heading2="Robust content management"
        para1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
        change the looks of a blog."
        para2="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
      />
      <JumbotronLikeThing />
      <FeatureSection
        illustration={laptopVector}
        heading1="Free, open, simple"
        heading2="Powerful tooling"
        para1="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        para2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.
      "
        altText="laptop illustration"
      />
      <Footer />
    </div>
  );
}

export default App;
