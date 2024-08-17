import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../components/header/Header.modules.css'
import { DataContext } from '../../context/AppContext'


const Header = () => {
   const context=useContext(DataContext)
   console.log(context);
   const{user , product}=context;

    const [categories,setCategories]=useState([
        {name:"Ceramics",rout:"ceramics"},
        {name:"Plant post",rout:"plantPost"},
        {name:"Tables",rout:"tables"},
        {name:"Chairs",rout:"chairs"},
        {name:"Crockery",rout:"crockery"},
        {name:"Tableware",rout:"tableware"}
    ])



    
  return (
    <div>
        {user}
     <ul className='navList'>
        {categories.map((categ)=>(
            <li >
                <NavLink className={"link"} to={`${categ.rout}`}>{categ.name}</NavLink>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default Header
