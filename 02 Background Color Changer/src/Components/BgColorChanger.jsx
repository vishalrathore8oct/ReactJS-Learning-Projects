import { useState } from "react"

function BgColorChanger() {

    const [bgColor, setBgColor] = useState("purple")
    const [bgHexColor, setBgHexColor] = useState("")

    const colors = {
        "red": "bg-red-500",
        "green": "bg-green-500",
        "blue": "bg-blue-500",
        "purple": "bg-purple-500",
    }

    const randomHexColor = () => {
        let hexCodeList = "0123456789ABCDEF"
        let hexCode = "#"
        for (let i = 0; i < 6; i++) {
            hexCode += hexCodeList[Math.floor(Math.random() * 16)]
        }
        setBgHexColor(hexCode)
        setBgColor("random")
    }
    return (
        <>
            <div className={`w-full min-h-screen ${colors[bgColor] || ""} text-white`}
                style={bgColor === "random" ? { backgroundColor: bgHexColor } : {}}
            >
                <h1>Background Color Changer</h1>
                <button onClick={() => setBgColor("red")}>Red</button>
                <button onClick={() => setBgColor("green")}>Green</button>
                <button onClick={() => setBgColor("blue")}>Blure</button>
                <button onClick={() => randomHexColor()}>Random</button>
            </div>
        </>
    )
}

export default BgColorChanger