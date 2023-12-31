import { FC } from 'react'
import Title from "@ui/Title/Title";
import './connectMe.style.scss'
import {Networks} from './data'

const ConnectMe: FC = () => {
    const handleClick=(link:string)=>{
        window.location.href=link;
    }

    return <section className={'ConnectMe'}>
        <div className="cent">
        <Title text={"links"}/>
        </div>

        <div className="connectMe-container">
            {Networks.map((i,ii)=>{
                return <div onClick={()=>{handleClick(i.link)}} key={ii} className={'card-links'}>{i.component}<a href={i.link} className={'desc'}>{i.desc}</a></div>
            })
            }
        </div>

    </section>
}

export default ConnectMe
