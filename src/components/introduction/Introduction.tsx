import { FC } from 'react'
import './introduction.style.scss'
import Greeting from "@ui/Greeting/Greeting";
import AboutMe from "@components/AboutMe/AboutMe";
import img from '../../assets/sticker1.webp'
import '@global/pageparams.scss';
const Introduction: FC = () => {
    return <section className={'introduction'}>


         <div className={"textAb"}>
        <Greeting text={"Hi There! I`m pepsi cherry"}/>
        <AboutMe/>
        </div>

        <img className={"imaa"} src={img} alt=""/>

    </section>
}

export default Introduction
