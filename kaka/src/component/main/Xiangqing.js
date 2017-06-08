import React from 'react';
import img4 from '../../images/任务详情/u110.svg'
import img5 from '../../images/发现/u277.svg'
class Xiangqing extends React.Component{

  render(){
    let item=this.props.location.state
    console.log(item)
    return (
      <div style={{flexGrow:'1',background:'#ccc'}}>
        <div className='clearfix' style={{background:'#fff'}}>
          <img alt='55' src={item.head} style={{borderRadius:'50%',width:'6.49rem',height:'6.49rem',display:'block',margin:'0 auto',marginTop:'1.21rem',}}/>
          <p style={{lineHeight:'3.41',textAlign:'center',fontSize:'1.32rem'}}>{item.name}
            <img alt='55' style={{width:'0.94rem'}} src={item.sex==='boy'?img4:img5}/>
          </p>
        </div>
        <div>
          <div>
            <p></p>
            <img/>
            <p></p>
          </div>
        </div>
        <div>接受任务</div>
      </div>
    )
  }
}
export default Xiangqing
