import { FC } from 'react'
import Header from "@components/header/Header";
import Introduction from "@components/introduction/Introduction";
import Tooling from "@components/tooling/Tooling";
import '@global/pageparams.scss'
import ConnectMe from "@components/connectMe/ConnectMe";
const Main: FC = () => {
    return <div>
        <Header/>
        <div className="container">
        <Introduction/>
        <Tooling/>
        <ConnectMe/>
        </div>
    </div>
}

export default Main
