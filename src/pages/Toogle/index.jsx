import React from 'react'
import './styles.css'

export default function Toggle({ toggled, onClick }) {
    const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    };

    return (
        <div className="App">
            <Toggle toggled={toggled} onClick={handleClick} />
        </div>
    );

    return (
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
}