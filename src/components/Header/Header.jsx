import React, { useContext } from 'react'
import Logo from '../../assets/images/logo.svg'
import { MdMenu } from "react-icons/md"
import { AppContext } from '../../context/context'
import { useShadow } from '../../hooks/useShadow'
import { Links } from '../Links/Links'

export const Header = () => {
    const { handleShowMenu } = useContext(AppContext)
    const { showShadow } = useShadow()
    return (
        <nav className={`fixed left-0 right-0 bg-white ${showShadow && 'shadow-md'}`}>
            <ul className='p-3 flex items-center justify-between lg:px-20 xl:px-36'>
                <li><img src={Logo} alt="Logo" /></li>
                <li onClick={handleShowMenu} className='md:hidden'>
                    <MdMenu size={40} />
                </li>
                <Links styles='hidden'/>
            </ul>
        </nav>
    )
}
