import React from 'react';
// images 
import Logo from '../assets/6534601.jpg'; 

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
{ /*logo*/}
<a href='#'>
<img className='max-w-[60px] rounded-3xl' src={Logo} alt=''></img>
</a>
{/* {button } */}
<button className='btn btn-sm'>
  <a href='https://t.me/abdulloh981177'>Work with me</a>
  </button>
      </div>
    </div>

  </header>
};

export default Header;
