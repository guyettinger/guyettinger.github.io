import { Video } from "@/components/Video";

export const FacilitiesManagement = () => {
    return (
        <section>
            <h2>Facilities Management</h2>
            <section>
                <h3>Screenshots</h3>
                <img src={'/images/portfolio/pointivo/FacilitiesManagement1.png'} alt={"Facilities Management"} width={640}/>
                <br/>
                <img src={'/images/portfolio/pointivo/FacilitiesManagement2.png'} alt={"Facilities Management"} width={640}/>
            </section>
            <section>
                <h3>Videos</h3>
                <Video title={"Pointivo Facility Management Promo Reel | IRE 2020"} id={"IRN8jhtYPcM"} width={640} height={360}/>
            </section>
        </section>
    )
}