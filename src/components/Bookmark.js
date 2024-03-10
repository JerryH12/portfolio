import { useRef, useEffect } from 'react';
import icon from './arrow.png';

function Bookmark(props){

    const anchorRef = useRef(null);

   useEffect(()=>{
   
        const anchor = anchorRef.current;

        anchor.addEventListener('click', (e)=> {
            let hashval = anchor.getAttribute('href')
            let target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            
            e.preventDefault()
        })
    });  
        
    return(
        <a ref={anchorRef} href={props.target}><img width="30" height="30" src={icon} alt="scroll down"/></a>
    );
}

export default Bookmark;