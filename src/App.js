import logo from './logo.svg';
import './App.css';
import FuntionComp from './components/FunctionComp';
import Classcomp from './components/Classcomp';
import MyStateComp from './components/MyStateComp';
import HoverComp from './components/HoverComp';
import UpdateStateComp from './components/UpdateStateComp';
import CondRenderComp from './components/CondRenderComp';
import MyImagesComp from './components/MyImagesComp';
import MyCssComp from './components/MyCssComp';
import ParentComp from './components/ParentComp';
import HoverCounterComp from './components/HoverCounterComp';
import ClickCounterComp from './components/ClickCounterComp';
import Hoc from './components/Hoc';
import RenderPropsComp from './components/RenderPropsComp';
import FavColorComp from './components/FavColorComp';
import UserFormComp from './components/UserFormComp';
import ChangeMultipleImg from './task/ChangeMultipleImg';
import EmployeeTable from './components/EmployeeTable';
import Usercom from './components/UserComp';
import ErrorBoundary from './components/ErrorBoundary';
import LifeCycleComp from './components/LifeCycleComp';
import MyRoutingComp from './components/MyRoutingComp';
// import ToggleImage from './task/ToggleImage';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='text-primary bg-info text-center'>Welcome D.S.V In React Session</h1>

      {/* <FuntionComp myName="Dwarkesh Virkhare" post="Fullstack Developer" />
       <Classcomp myName="Ankit Patil" post="React Developer"/> */}
      {/* <MyStateComp /> */}
      {/* <HoverComp /> */}
      {/* <UpdateStateComp /> */}
      {/* <CondRenderComp /> */}
      {/* <MyImagesComp /> */}
      {/* <MyCssComp /> */}
      {/* <ParentComp /> */}
      {/* <HoverCounterComp></HoverCounterComp>
      <ClickCounterComp></ClickCounterComp> */}
      {/* <RenderPropsComp  name={(isLogin)=>{return isLogin?"Dwarkesh":" Dwarkesh Virkhare"}}  ></RenderPropsComp> */}
      {/* <RenderPropsComp render={(count,incrementCounter)=>{return <ClickCounterComp count={count} incrementCounter ={incrementCounter} />   }}></RenderPropsComp>
      <RenderPropsComp render={(count,incrementCounter)=>{return <HoverCounterComp count={count} incrementCounter ={incrementCounter} />   }}></RenderPropsComp> */}

      {/* <FavColorComp></FavColorComp> */}

      {/* <UserFormComp></UserFormComp> */}
      {/* <ChangeMultipleImg></ChangeMultipleImg> */}

      {/* <ToggleImage></ToggleImage> */}
      {/* <EmployeeTable></EmployeeTable> */}

     
      {/* <ErrorBoundary>   <Usercom uname="Dwarkesh Virkhare" ></Usercom>  </ErrorBoundary>
      <ErrorBoundary>   <Usercom uname="Piyush Nahre" ></Usercom>  </ErrorBoundary>
      <ErrorBoundary>    <Usercom uname="Ankit Patil" ></Usercom>  </ErrorBoundary>
      <ErrorBoundary>    <Usercom uname="Amey Dahake" ></Usercom>  </ErrorBoundary>
      <ErrorBoundary>    <Usercom uname="Yash Bhandare" ></Usercom>  </ErrorBoundary>
       */}
{/*       
      <LifeCycleComp mycolor="Blue" ></LifeCycleComp> */}


<MyRoutingComp></MyRoutingComp>

    </div>
  );
}

export default App;
