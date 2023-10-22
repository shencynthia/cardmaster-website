import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const section = document.getElementById(hash.substr(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <section id="about-section"> ... </section>
    </div>
  );
}

export default AboutPage;
