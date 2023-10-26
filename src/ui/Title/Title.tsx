import {CSSProperties, FC} from 'react'
import './title.style.scss'
interface ITitle {
    text:string
    style?:CSSProperties | undefined
}

const Title: FC<ITitle> = ({text,style}) => {
    return <h2 style={style} className={'title'}>{text}</h2>
	}

export default Title
