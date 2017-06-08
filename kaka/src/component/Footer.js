import React from 'react';
import {NavLink} from 'react-router-dom'
import Img1 from '../images/index/u14.png'
import Img11 from '../images/index/u9.png'
import Img2 from '../images/index/u21.png'
import Img21 from '../images/index/u26.png'
import Img3 from '../images/index/u32.png'
import Img31 from '../images/index/u38.png'
import Img4 from '../images/index/u42.png'
import Img41 from '../images/index/u48.png'
import Img5 from '../images/index/u52.png'
import Img51 from '../images/index/u58.png'
import Img333 from '../images/index/u3.png'

class Footer extends React.Component{
  render(){
    // console.log(this.img1)
    return (
      <div className='footer'>
        <NavLink activeClassName='active' exact to='/'>
          <img alt='55' src={Img11}/>
          <img alt='55' src={Img1} />
          <br/><span>首页</span>
        </NavLink>
        <NavLink activeClassName='active' to='/find'>
          <img alt='55' src={Img21} />
          <img alt='55' src={Img2} />
          <br/><span>发现</span>
        </NavLink>
        <NavLink activeClassName='active' to='/release'>
          <img alt='55' src={Img31} />
          <img alt='55' style={{zIndex:5}} src={Img3} />
          <img alt='55' src={Img333}/>
          <br/><span>发布</span>
        </NavLink>
        <NavLink activeClassName='active' to='/message'>
          <img alt='55' src={Img41} />
          <img alt='22' src={Img4} />
          <br/><span>消息</span>
        </NavLink>
        <NavLink activeClassName='active' to='/mine'>
          <img alt='55' src={Img51} />
          <img alt='22' src={Img5} />
          <br/><span>我的</span>
        </NavLink>
      </div>
    )
  }
}
export default Footer
