import React from 'react';
import {Link,withRouter} from 'react-router-dom'
import img1 from '../images/我的/u75.svg'
import img2 from '../images/任务详情/u103.png'
import Icon from 'antd/lib/icon'
class Heard extends React.Component{
  constructor(){
    super()
    this.state={
      plice:''
    }
  }
  componentWillMount(){
    this.setState({plice:this.props.location.pathname})
  }
  componentDidUpdate(){
    this.state.plice!==this.props.location.pathname ? this.setState({plice:this.props.location.pathname}):null
  }
  render(){

    return (
      this.state.plice==='/'?
        <div className="heard">
          <div className='diqu'><span>武汉</span><span style={{fontSize:'1.9rem'}}><Icon type="environment-o" /></span></div>
          <div className='logo' style={{width:'6.3rem',height:'2.3rem',position:'absolute',left:'50%',marginLeft:'-3.15rem'}}><img alt='55' style={{display:'block',width:'100%'}} src={img1}/></div>
          <div className='search' ><span style={{fontSize:'2.2rem'}}><Icon type="search" /></span></div>
        </div>
      :
      this.state.plice==='/find/fenxiang'?
      <div className="heard">
        <div onClick={()=>window.history.back()} className='diqu'>
            <img style={{width:'1.5rem'}} alt='ds' src={img2}/>
        </div>
        <div className='logo' style={{width:'6.3rem',height:'2.3rem',position:'absolute',left:'50%',marginLeft:'-3.15rem'}}><img alt='55' style={{display:'block',width:'100%'}} src={img1}/></div>
      </div>
      :
      this.state.plice==='/home/xiangqing'?
      <div className="heard">
        <div onClick={()=>window.history.back()} className='diqu'>
            <img style={{width:'1.5rem'}} alt='ds' src={img2}/>
        </div>
        <div className='logo' style={{width:'6.3rem',fontSize:'1.21rem',height:'2.3rem',position:'absolute',left:'50%',marginLeft:'-3.15rem'}}>任务详情</div>
      </div>
      :
      <div className="heard">
        <div style={{width:'6.3rem',height:'2.3rem',margin:'0 auto'}}><img alt='55' style={{display:'block',width:'100%'}} src={img1}/></div>
      </div>
    )
  }
}
export default withRouter(Heard)
