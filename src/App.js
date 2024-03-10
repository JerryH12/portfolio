
import './App.css';
import './components/portfolio.css';
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
      <section style={{width: "400px"}}>
         <article>
         <h1>WEBSITE DEVELOPER</h1>
          <p>
          Hello,
          my name is Jerry and I develop web sites, both backend and frontend.  </p>
         </article>
      </section>
      <section id="P1">
        <article>
        <h1>About me</h1>
          <p>  I have an academic degree in web programming and three years work experience.</p>
          <p> For the most part, I'm self-taught. Started coding as a teenager and still doing it almost half a century later.</p>
        </article>
        <aside>
          <Bookmark title="down" target="#P2"/>
        </aside>
      </section>
      <section id="P2">
       <article>
       <h1>Experience</h1>
        <p>  I have worked with C# and SQL but also with HTML, CSS and javascript.</p>
       </article>
       <aside>
          <Bookmark title="down" target="#P3"/>
        </aside>
      </section>
      <section id="P3">
        <article>
            <h1>Projects</h1>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>     
          </article>
          <aside>
            <Bookmark title="down" target="#P4"/>
        </aside>
        </section>
        <section id="P4">
         <article>
         <h1>Contact me</h1>   
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
         </article>
         
        </section>
    </div>
    <nav>
        <Menu />
      </nav>
    <footer>
     Copyright &copy; 2024 Jerry Hall. All Rights Reserved.
     </footer></>
  );
}

export default App;
