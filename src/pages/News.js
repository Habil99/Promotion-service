import Banner from "../components/News/Banner"
import Card from "../components/News/Card"

const News = () => {
    return (
        <div>
            <h4 className="main-wrapper-title">Most popular</h4>
            <Banner />
            <h4 className="main-wrapper-title">Last news</h4>
            <div className="news-cards">
                <Card
                    img={'/assets/images/news-2.svg'}
                    info={'Incredible 3D illustrations of famous fictional places'}
                    date={'Aug 14, 2020'}
                />
                <Card
                    img={'/assets/images/news-3.png'}
                    info={'7 reasons why now is the time to hire junior designers'}
                    date={'Aug 12, 2020'}
                />
                <Card
                    img={'/assets/images/news-4.png'}
                    info={"The Beginner's Guide to Product Packaging"}
                    date={'Aug 11, 2020'}
                />
                <Card
                    img={'/assets/images/news-5.png'}
                    info={"Card Tricks: 5 Tips for Designing an Ace Deck of Playing Cards"}
                    date={'Aug 10, 2020'}
                />
                <Card
                    img={'/assets/images/news-6.png'}
                    info={"5 Different Paths to Becoming a Designer"}
                    date={'Aug 9, 2020'}
                />
                <Card
                    img={'/assets/images/news-7.png'}
                    info={"10 famous logos reimagined by another graphic designer"}
                    date={'Aug 8, 2020'}
                />
            </div>
        </div>
    )
}

export default News
