interface IProps {
    height: number
}

const Indent: React.FC<IProps> = ({height}) => {
    return <div style={{height: `${height}px`}}></div>
} 

export default Indent