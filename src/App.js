
import './App.css';
import './components/portfolio.css';
import Checkmark from './checkmark.png';
import ProjectImage1 from './project-1.png';
import ProjectImage2 from './project-2.png';
import KeyboardImage from './keyboard.png';
import Menu from './components/Menu';
import Bookmark from './components/Bookmark';

function App() {
  return (
    <>
   <header>
       
      <span className="myName">Jerry Hall</span>
      
      <nav>
        <Menu />
      </nav>
    </header>

    <div className="container">
      <section style={{maxWidth: "400px"}}>
         <article>
         <h1>Website developer</h1>
          <p>
          Hello,
          I'm Jerry and I develop web sites, both backend and frontend. It's fun and addictive. </p>
         </article>
      </section>
      <section id="P1">
        <article>
        <h1>About me</h1>
        <div style={{float: "left", width: "400px", textAlign: "center"}}>
          <img style={{display: "block"}} width="90%" height="90%" src={KeyboardImage} alt="keyboard" />
         
          <a style={{color: "gray", fontStyle: "italic", fontSize: "12px", position: "relative", top: "-40px"}} href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#fromView=search&page=1&position=34&uuid=be6540cc-4f32-4dd6-a422-d1a680486728">Image by storyset on Freepik</a>
         
        </div>
        <div style={{float: "left", maxWidth: "450px"}}>
          <p>  I have an academic degree in web programming and three years work experience.</p>
          <p> For the most part, I'm self-taught. Started coding as a teenager and still doing it almost half a century later.</p>
          </div>
        </article>
        <aside>
          <Bookmark title="down" target="#P2"/>
        </aside>
      </section>
      <section id="P2">
       <article>

      {/* Dsiplay as table for large screens. */ }
       <div className="largeScreen">
       <h1>Experience</h1>
       
        <div className="leftColumn">
          <h2>Frontend development</h2>
          <table>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>HTML</h3>
                <h4>Experienced</h4>
              </td>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3> 
                  CSS
                </h3>
                <h4>Experienced</h4>
              </td>
            </tr>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>
                Javascript
                </h3>
                <h4>Experienced</h4>
              </td>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                XML
               </h3>
               <h4>Intermediate</h4>
              </td>
            </tr>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>
                React
                </h3>
                <h4>Basic</h4>
              </td>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                Git
               </h3>
               <h4>Basic</h4>
              </td>
            </tr>
          </table>
        </div>
        <div className="leftColumn">
          <h2>Backend development</h2>
          <table>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                C# ASP.NET
               </h3>
               <h4>Experienced</h4>
              </td>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>
                Microsoft SQL Server
                </h3>
                <h4>
                  Experienced
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                PHP
               </h3>
               <h4>Experienced</h4>
              </td>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                MySQL
               </h3>
               <h4>Experienced</h4>
              </td>
            </tr>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>
                Java
                </h3>
                <h4>Basic</h4>
              </td>
              <td>
              <img width="30" height="30" src={Checkmark} alt="checked" />
               <h3>
                C++
               </h3>
               <h4>Basic</h4>
              </td>
            </tr>
            <tr>
              <td>
                <img width="30" height="30" src={Checkmark} alt="checked" />
                <h3>
                Python
                </h3>
                <h4>Basic</h4>
              </td>
              <td>
                &nbsp;
              </td>
            </tr>
          </table>
        </div>
      </div>

       {/* For mobiles and small screens. */}
      <div className="smallScreen">
      
        <div className="leftColumn">
          <h2>Frontend development</h2>
          <ul>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>HTML</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>CSS</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>Javascript</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>XML</h3>  
              <h4>Intermediate</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>React</h3>
              <h4>Basic</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>Git</h3>
              <h4>Basic</h4>
            </li>
          </ul>
          </div>
         
          <div className="leftColumn">
          <h2>Backend development</h2>
          <ul>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>C# ASP.NET</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>Microsoft SQL Server</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>PHP</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>MySQL</h3>
              <h4>Experienced</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>Java</h3>
              <h4>Basic</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>C++</h3>
              <h4>Basic</h4>
            </li>
            <li>
              <img width="30" height="30" src={Checkmark} alt="checked" />
              <h3>Python</h3>
              <h4>Basic</h4>
            </li>
          </ul>
        </div>
       </div>

       </article>
       <aside>
          <Bookmark title="down" target="#P3"/>
        </aside>
      </section>
      <section id="P3">
        <article>
            <h1>Projects</h1>
            <div className="projects">
              <div style={{"width": 330}} className="leftColumn">   
                  <img width="90%" height="90%" src={ProjectImage1} alt="project-1" />  
              </div> 
              <div style={{"width": 330}} className="leftColumn">
                <img width="90%" height="90%" src={ProjectImage2} alt="project-2" />
              </div>
            </div>
          </article>
          <aside>
            <Bookmark title="down" target="#P4"/>
        </aside>
        </section>
        <section id="P4">
         <article>
         <h1>Contact me</h1> 
          <div className="contact">
            <div className="column1">
              john.doe@example.com
            </div>
          </div>
         </article>    
        </section>
    </div>
    <nav>
        <ul className="menuFooter">
            <li><a href="#P1">About</a></li>
            <li><a href="#P2">Experience</a></li>
            <li><a href="#P3">Projects</a></li>
            <li><a href="#P4">Contact</a></li>
        </ul>
      </nav>
    <footer>
     Copyright &copy; 2024 Jerry Hall. All Rights Reserved.
     </footer></>
  );
}

export default App;
