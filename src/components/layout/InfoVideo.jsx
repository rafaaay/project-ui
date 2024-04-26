function InfoVideo() {
    return (
        <section className="info-video section">
            <div className="container info-video__content">
                <h2 className="heading heading--section">Jump into Hassle - Free and Efficient Testing Tool</h2>
                <p className="heading heading--sub-text">Stellar's codeless testing results in hassle - free and efficient testing. This revolutionary feature enables manual testers to create automated tests without having to write a single line of code.</p>

                <div className="info-video__video">
                    <video controls autoplay muted>
                        <source src="/intro.mp4" type="video/mp4" />
                        <source src="/intro.ogg" type="video/ogg" />
                    </video>
                </div>            
            </div>
        </section>
    )
}

export default InfoVideo
