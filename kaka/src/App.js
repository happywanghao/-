import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Footer from './component/Footer.js'
import Heard from './component/Heard.js'
import Home from './component/main/Home.js'
import Xiangqing from './component/main/Xiangqing.js'
import Find from './component/main/Find.js'
import Fenxiang from './component/main/Fenxiang.js'
import Message from './component/main/Message.js'
import Release from './component/main/Release.js'
import Mine from './component/main/Mine.js'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className='flex'>
          <Heard/>
          <div className='main'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home/xiangqing' component={Xiangqing}/>
            <Route exact path='/find' component={Find}/>
            <Route exact path='/find/fenxiang' component={Fenxiang}/>
            <Route exact path='/release' component={Release}/>
            <Route exact path='/message' component={Message}/>
            <Route exact path='/mine' component={Mine}/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>

    )
  }
}
export default App
