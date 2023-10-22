import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        
        if (hash) {
            const section = document.getElementById(hash.substr(1));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div>
            about page
            <section id="about-section"> ... </section>
        </div>
    );
}

export default AboutPage;
