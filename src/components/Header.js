import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'

const Header = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div className='py-4'>
      <div className="container mobile-container">
        <div className="flex justify-between">
            <div>
                <Image src={`/images/SVCCLogo.png`} alt="SVCC HomePage" width={100} height={0} className='w-auto h-auto'/>
            </div>
            <div className="light">
                <h4 className="header-title">
                    Silicon Valley Code Camp
                </h4>
            </div>
            <div className={`${theme === "light"? (""): ("text-info")} flex items-center gap-x-3`}>
                Helo Mr.Smith
                <span>
                    <a href="#">Sign Out</a>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
