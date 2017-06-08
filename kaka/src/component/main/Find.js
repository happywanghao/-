import React from 'react';
import {Link} from 'react-router-dom'
import img1 from '../../images/发现/u286.svg'
import img2 from '../../images/发现/u288.svg'
import img3 from '../../images/发现/u290.svg'
import img4 from '../../images/发现/u284.svg'
import img5 from '../../images/任务详情/u110.svg'
import img6 from '../../images/发现/u277.svg'
import img7 from '../../images/任务详情/u118.svg'
import img11 from '../../images/发现/u298.svg'
import img12 from '../../images/发现/u302.svg'
import img13 from '../../images/发现/u304.svg'
import img14 from '../../images/发现/u310.png'
class Find extends React.Component{
  constructor(){
    super()
    this.state={
      data:[
        {
          name:'泡沫',
          heard:img4,
          sex:'girl',
          title:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        },
        {
          name:'初夏',
          heard:img4,
          sex:'boy',
          title:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        },
        {
          name:'泡沫',
          heard:img4,
          sex:'girl',
          title:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        },
        {
          name:'初夏',
          heard:img4,
          sex:'boy',
          title:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        },
        {
          name:'泡沫',
          heard:img4,
          sex:'girl',
          title:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        },
        {
          name:'初夏',
          heard:img4,
          sex:'boy',
          title:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
          img:[img1,img2,img3],
          time:'58分钟前',
          place:'宏村秀里精品文化酒店',
          look:326,
          like:70,
          comment:26
        }
      ]
    }
  }
  render(){
    return (
      <div className='find'>
        {
          this.state.data.map(
            (item,index)=>(
              <div key={index} className="card">
                <img className='useheard' alt='55' src={item.heard}/>
                <p className='name'>
                  <span>{item.name}</span>&nbsp;&nbsp;
                  <img alt='66' src={item.sex === 'girl' ? img6 : img5 }/>
                  <p style={{float:'right',padding:'1rem'}}>
                    <Link to="/find/fenxiang">
                      <img alt='22' style={{width:'1.65rem'}} src={img14}/>
                    </Link>
                  </p>
                </p>
                <p style={{fontSize:'0.88rem',paddingLeft:'2.15rem'}}>{item.title}</p>
                <div className='useimg'>
                  <img alt='55' src={item.img[0]}/>
                  <img alt='55' src={item.img[1]}/>
                  <img alt='55' src={item.img[2]}/>
                </div>
                <div className='usefooter clearfix'>
                  <span>{item.time}</span>&nbsp;&nbsp;&nbsp;
                  <img alt='32' style={{width:'0.66rem'}} src={img7}/>
                  <span>{item.place}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{float:'right'}}>
                    <img  style={{textAlign:'right',width:'2.07rem'}} alt='55' src={img11}/>&nbsp;
                    <span style={{textAlign:'right'}} >{item.look}</span>&nbsp;
                    <img  style={{textAlign:'right',width:'1.32rem'}} alt='55' src={img12}/>&nbsp;
                    <span style={{textAlign:'right'}} >{item.like}</span>&nbsp;
                    <img  style={{textAlign:'right',width:'1.32rem'}} alt='55' src={img13}/>&nbsp;
                    <span style={{textAlign:'right'}} >{item.comment}</span>&nbsp;

                  </div>




                </div>
              </div>
            )
          )
        }
      </div>
    )
  }
}
export default Find
