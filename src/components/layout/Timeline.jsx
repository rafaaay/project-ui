import TimelineCard from "../atoms/TimelineCard"

function Timeline() {
    return (
        <section className="timeline section">
            <div className="container timeline__container">
                <h2 className="heading heading--section">How it works</h2>

                <div className="timeline__content">
                    <div className="left">
                        <div className="timeline__avatar">
                            <img src="/images/img_stellar-avatar.svg" alt="stellar avatar" />
                        </div>
                    </div>

                    <div className="right">
                        <TimelineCard />
                        <TimelineCard />
                        <TimelineCard />
                        <TimelineCard />
                        <TimelineCard />
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Timeline
