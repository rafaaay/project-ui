import SliderCard from "../atoms/SliderCard"

function Slider() {
    return (
        <section className="slider section">
            <div className="container slider__container">

                <div className="slider__header">
                    <h2 className="heading heading--section">Unlock Possibilities with Our Dynamic Feature Suite</h2>
                    <p  className="heading heading--sub-text">At Stellar, our codeless testing solutions align perfectly with our vision to revolutionize the world of testing, making it hassle-free and efficient for all. Our mission is to empower manual testers to create automated tests effortlessly, realizing this vision with every innovation.</p>
                </div>

                <div className="slider__content">
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                </div>
            </div> 
        </section>
    )
}

export default Slider
