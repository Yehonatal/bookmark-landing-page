import TabletIllu from "../assets/images/illustration-hero.svg";
import "../Style/hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <section>
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean nad simple interface to organize your favorite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <div className="hero-btns">
                    <button className="hero-btn prime">Get it on Chrome</button>
                    <button className="hero-btn sec">Get it on Firefox</button>
                </div>
            </section>
            <div className="tab-illu-hero">
                <img src={TabletIllu} alt="" />
            </div>
        </div>
    );
};

export default Hero;
