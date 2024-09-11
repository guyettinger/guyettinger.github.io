import { Video } from "@/components";

export const MediaCentralSearch = () => {
    return (
        <section>
            <h2>Media Central</h2>
            <section>
                <h3>Search App Screenshot</h3>
                <img src={'/images/portfolio/avid/AvidSearchApp.png'} alt={"Avid Search App"} width={640}/>
            </section>
            <section>
                <h3>Search App Basics Video</h3>
                <Video title={'Search App Basics'} id={"cKCPyCIRHVw"} width={640} height={360}/>
            </section>
        </section>
    )
}