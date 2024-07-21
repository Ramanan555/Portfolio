import React from "react"
import todo from './todo.jpg';
import xo from './xo.png';
import xcel from './xcel.png';

function Projects() {
  return (
    <div>
       <div className="section"> 
        <div className="text">
                <h1 className="todo-head">To-Do List</h1>
                <p className="todo-subs">The React To-Do List project is a web application designed to streamline task management with a clean and intuitive interface. Users can effortlessly add, complete, and delete tasks, maintaining an organized agenda. Key features include task filtering for improved focus, persistent storage ensuring data retention across sessions, and responsiveness across various devices. Built with React.js, CSS for styling, and optional integration with Local Storage or a backend API for data management, this project provides an excellent opportunity to hone React skills while exploring modern web development practices.</p>
            </div>
            <div className="wrapper">
                <img className="todo" src={todo} alt="todo"></img>
            </div>        
        </div>  
        <div className="section"> 
        <div className="text">
                <h1 className="todo-head">Tic-Tac-Toe</h1>
                <p className="todo-subs">
Building a Tic Tac Toe project in React.js entails creating a dynamic user interface where two players engage in the classic game. Structurally, it involves designing components such as the main Board representing the game grid and smaller Square components for individual cells. React's state management is crucial here, as the Board component maintains the game state, tracking player moves and determining the current turn. User interaction is handled through click events on the Square components, triggering updates to the game state. The game logic involves checking for win conditions after each move, examining rows, columns, and diagonals. Additionally, managing the game flow includes switching turns, preventing moves on occupied squares, and declaring a winner or draw. Visual appeal can be added through CSS or styling frameworks. </p>
            </div>
            <div className="wrapper">
                <img className="todo" src={xo} alt="xo"></img>
            </div>        
        </div>  
        <div className="section"> 
        <div className="text">
                <h1 className="todo-head">Template creation from Xcel</h1>
                <p className="todo-subs">The React To-Do List project is a web application designed to streamline task management with a clean and intuitive interface. Users can effortlessly add, complete, and delete tasks, maintaining an organized agenda. Key features include task filtering for improved focus, persistent storage ensuring data retention across sessions, and responsiveness across various devices. Built with React.js, CSS for styling, and optional integration with Local Storage or a backend API for data management, this project provides an excellent opportunity to hone React skills while exploring modern web development practices.</p>
            </div>
            <div className="wrapper">
                <img className="todo" src={xcel} alt="xcel"></img>
            </div>        
        </div>          


    
    </div>









    
  )
}

export default Projects