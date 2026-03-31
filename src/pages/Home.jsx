import Info from "../components/Info";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Facilities from "../components/Facilties";
import Events from "./Events";
import Showcase from "../components/Showcase";
import { eventsData } from "../constants/eventData";

export default function Home() {
    return (
        <>
            <Hero />
            <div id='mission'>
                <Info />
            </div>
            <Message />
            <div id='facilities'>
                <Facilities />
            </div>
            <Showcase 
                title="Upcoming Events"
                events={eventsData.slice(0, 6)}
            />
        </>
    )
}