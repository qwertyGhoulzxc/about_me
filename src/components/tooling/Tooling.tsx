import { FC } from 'react'
import './tooling.style.scss';
import Title from "@ui/Title/Title";
import {Icons} from './data'



const Tooling: FC = () => {
	return <section className={'tooling'}>
    <div className="cent">
    <Title text={'Tooling'}/>
    </div>

        <div className="tooling-container">
        {Icons.map((i,ii)=>{
        return <div key={ii} className={'card-tools'}>{i.component}<p className={'desc'}>{i.desc}</p></div>
        })
        }
        </div>
    </section>
}

export default Tooling
// react
// next
// node
// mongo
// typescript
// sass
// redux
// rest api
