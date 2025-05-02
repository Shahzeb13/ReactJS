import {useState}  from 'react'

const MyColorPicker = () => {
    const [color , setColor] = useState('#000000')

    const copyToClipboard = () =>{
        navigator.clipboard.writeText(color)
        alert('Color copied to clipboard successfully!')
    }

    return (

        <div style = {{textAlign: 'center' , padding : '2rem' , }}>
            <h1>Color Picker</h1>
            <input type = "color"
            value = {color}
            onChange = {(e) => setColor(e.target.value)}     />
            <p>Selected Color: <strong>{color}</strong></p>
            <div style = {{
                width: "150px",
                height: "150px",
                margin: "1rem auto",
                backgroundColor: color,
                border: "1px solid #000",
            

            }}></div>
            <button style ={{padding : '0.5rem 2rem ',
                fontWeight : '700' , backgroundColor : 'yellowgreen',
                letterSpacing : '0.1rem' , border: "none" ,color:'white'
            }}onClick = {() => copyToClipboard()}>Copy to Clipboard</button>
        </div>
    )
}

export default MyColorPicker;