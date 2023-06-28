import React, { Children, useState } from 'react'
import { AiFillApple,AiOutlineMenu,AiFillAlipayCircle,AiFillAccountBook,AiFillAudio,AiFillAlert,AiFillBug} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

function Sidebar ({Children}) {
    const[isopen,setIsopen] = useState(false)
    const toggle = () => setIsopen(!isopen);
 
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<AiFillApple/>
        },
        { 
            path:"/About",
            name:"About",
            icon:<AiFillAlipayCircle/>
        },
        {
            path:"/Comments",
            name:"Comments",
            icon:<AiFillAccountBook/>
        },
        {
            path:"/Analytics",
            name:"Analytics",
            icon:<AiFillAudio/>
        },
        {
            path:"/Product",
            name:"Product",
            icon:<AiFillAlert/>
        },
        {
            path:"/ProductList",
            name:"ProductList",
            icon:<AiFillBug/>
        },
    ]
    return (
        <div className='container'>
            <div style={{width:isopen ? "250px":"50px"}} className='sidebar'>

                <div className='topsection'>
                    <h1 style={{display:isopen ? "block":"none"}} className='logo'>
                        LOgo
                    </h1>
                    <div style={{marginLeft:isopen ? "50px":"0px"}} className='bars'>
                        <AiOutlineMenu onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display:isopen ? "block":"none"}}className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{Children}</main>
           
        </div>
  )
}

export default Sidebar
