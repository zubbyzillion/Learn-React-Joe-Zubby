function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} question to test your React mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch ({ type: "start" })}>Let's start</button>
        </div>
    )
}

export default StartScreen

// /* HTML: <div class="loader"></div> */
// .loader {
//     width: 35px;
//     aspect-ratio: 1;
//     --c:no-repeat linear-gradient(#046D8B 0 0);
//     background:
//       var(--c) 0 0,
//       var(--c) 100% 0,
//       var(--c) 100% 100%,
//       var(--c) 0 100%;
//     animation: 
//       l2-1 2s infinite,
//       l2-2 2s infinite;
//   }
//   @keyframes l2-1 {
//     0%   {background-size: 0    4px,4px 0   ,0    4px,4px 0   }
//     12.5%{background-size: 100% 4px,4px 0   ,0    4px,4px 0   }
//     25%  {background-size: 100% 4px,4px 100%,0    4px,4px 0   }
//     37.5%{background-size: 100% 4px,4px 100%,100% 4px,4px 0   }
//     45%,
//     55%  {background-size: 100% 4px,4px 100%,100% 4px,4px 100%}
//     62.5%{background-size: 0    4px,4px 100%,100% 4px,4px 100%}
//     75%  {background-size: 0    4px,4px 0   ,100% 4px,4px 100%}
//     87.5%{background-size: 0    4px,4px 0   ,0    4px,4px 100%}
//     100% {background-size: 0    4px,4px 0   ,0    4px,4px 0   }
//   }
//   @keyframes l2-2 {
//     0%,49.9%{background-position: 0 0   ,100% 0   ,100% 100%,0 100%}
//     50%,100%{background-position: 100% 0,100% 100%,0    100%,0 0   }
//   }