import { Video } from "@/components/Video";

export const Emmy = () => {
    return (
        <section>
            <h2>2015 Technical Emmy Award for Phonetic Indexing and Timing</h2>
            <section>
                <h3>Award</h3>
                <img src={'/images/portfolio/nexidia/Emmy.png'} alt={"Emmy Award"} width={640}/>
            </section>
            <section>
                <h3>Presentation</h3>
                <Video title={"Emmy Award Presentation"} id={"6Z9UNWp7vTQ"} width={640} height={360}/>
            </section>
        </section>
    )
}