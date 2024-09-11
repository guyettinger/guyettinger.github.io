import styled from "styled-components";

const PatentDescription = styled.div`
width: 640px
`

export const Patent = () => {
    return (
        <section>
            <h2>Patents</h2>
            <section>
                <h3>US11216663B1</h3>
                <img src={'/images/portfolio/pointivo/Patent.png'} alt={"Patent"} width={640}/>
                <br/>
                <PatentDescription>
                    Systems and methods for generating of 3D information on a user display from processing of sensor
                    data for objects, components or features of interest in a scene and user navigation thereon
                </PatentDescription>
            </section>
            <section>
                <h3>Press</h3>
                <a href={"https://www.prnewswire.com/news-releases/pointivo-lands-10th-patent-increasing-coverage-of-the-drone-analytics-market-301457346.html"} target={"_blank"}>
                    Pointivo Lands 10th Patent Increasing Coverage of the Drone Analytics Market
                </a>
            </section>
        </section>
    )
}