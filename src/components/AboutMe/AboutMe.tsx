import { FC } from "react"
import './aboutMe.style.scss'
// import imp from '../../sticker1.webp'
const AboutMe: FC = () => {
    return <div className={"AboutMeContainer"}>
        <h2>
            A <span>Frontend Developer</span>. I Help Startups <span>Launch</span> And <span>Grow</span> Their Products
        </h2>
        <p className={'abme'}>I am a frontend developer without work experience. Interested in finding a job. Currently in the process of learning react native</p>
        {/*<img src={imp} alt=""/>*/}
    </div>
}

export default AboutMe
