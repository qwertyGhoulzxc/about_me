import { FC } from 'react'
import "./greeting.style.scss";
import {IoHandLeftSharp} from 'react-icons/io5'
import {FaHandPointRight} from 'react-icons/fa'
interface IGreeting {
    text:string;
}

const Greeting: FC<IGreeting> = ({text}) => {
    return <>
        <p className={'greet'}>
            <FaHandPointRight className={"hand"}/>
            <div className="typing">{text}</div>
        </p>
    </>
}

export default Greeting
