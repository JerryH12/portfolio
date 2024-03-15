import './menu.css';
import { useRef, useEffect, useState } from 'react';
//import { useWindowSize } from "@uidotdev/usehooks";

function Menu(){

    const listRef = useRef(null);
    const buttonRef = useRef(null);
    const [style, setStyle] = useState({});

    useEffect(()=>{
        
        //let anchorlinks = document.querySelectorAll('a[href^="#"]')
        const listNode = listRef.current;
        let anchorlinks = listNode.querySelectorAll('li > a[href^="#"]');

        for (let item of anchorlinks) { // relitere 

            item.addEventListener('click', (e)=> {
                let hashval = item.getAttribute('href')
                let target = document.querySelector(hashval)
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                // history.pushState(null, null, hashval)
                e.preventDefault()
            })
        }   
    });

    // const size = useWindowSize();
    // if(size.width>650 && buttonRef.current.lastElementChild.style.display==="none"){
    //     listRef.current.style.visibility="visible";
    // }
   
    let showMenu=()=>{
        //listRef.current.style.visibility="visible";

        setStyle({visibility: "visible"});
        buttonRef.current.firstElementChild.style.display="none";
        buttonRef.current.lastElementChild.style.display="block";  
    }

    let hideMenu=()=>{
        //listRef.current.style.visibility="hidden"

        setStyle({visibility: "hidden"});
        buttonRef.current.firstElementChild.style.display="block";
        buttonRef.current.lastElementChild.style.display="none";
    }
    
    return (
        <>
        <div ref={buttonRef} className="buttons">
            <div className="buttonShow" onClick={showMenu}></div>
            <div className="buttonHide" onClick={hideMenu}></div>
        </div>
        <ul ref={listRef} className="menu" style={style}>
            <li><a href="#P1">About</a></li>
            <li><a href="#P2">Experience</a></li>
            <li><a href="#P3">Projects</a></li>
            <li><a href="#P4">Contact</a></li>
        </ul></>
    );
}

export default Menu;