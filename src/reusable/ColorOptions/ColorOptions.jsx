import './ColorOptions.css'

const ColorOptions = (props) => {
    return (
        <div className='colorOptions' >
            <div><p className='p__carCharacteristics'>Цвета:</p></div>
            <div className='colorOptions-container'>
                {props.colors.map((color) => {
                    return (
                        <div className='colorOption' key={color} style={{backgroundColor: color}}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorOptions