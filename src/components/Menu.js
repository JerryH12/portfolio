import './menu.css';
import { useRef, useEffect} from 'react';

function Menu(){

    const listRef = useRef(null);

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

    let showMenu=()=>{
        listRef.current.style.visibility="visible";
        listRef.current.previousElementSibling.previousElementSibling.style.display="none";
        listRef.current.previousElementSibling.style.display="block";
    }

    let hideMenu=()=>{
        listRef.current.style.visibility="hidden";
        listRef.current.previousElementSibling.previousElementSibling.style.display="block";
        listRef.current.previousElementSibling.style.display="none";
    }
    
    return (
        <>
        <div className="buttonShow" onClick={showMenu}></div>
        <div className="buttonHide" onClick={hideMenu}></div>

        <ul ref={listRef} className="menu">
            <li><a href="#P1">About</a></li>
            <li><a href="#P2">Experience</a></li>
            <li><a href="#P3">Projects</a></li>
            <li><a href="#P4">Contact</a></li>
        </ul></>
    );
}

export default Menu;