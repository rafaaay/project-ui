function SliderCard() {
    return (
        <article className="card card--slider">
            <header className="card__header">
                <div className="card__img">
                    <img src="/images/misc/icon_card.svg" alt="card image" />
                </div>

                <div className="card__heading">
                    <h3>Codeless Testing</h3>
                </div>
            </header>

            <div className="card__body">
                <div className="card__text">
                    <p>Codeless Testing Steller’s codeless testing feature results in hassle-free and efficient testing. This revolutionary feature enables manual testers to create automated tests without having to write a single line of code.</p>
                </div>
            </div>
        </article>
    )
}

export default SliderCard
