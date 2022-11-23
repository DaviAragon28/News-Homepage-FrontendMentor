import React, { useContext } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { AppContext } from '../../context/context'
import { Links } from '../Links/Links'

export const Menu = () => {
    const { handleShowMenu, showMenu } = useContext(AppContext)


    return (
        <nav className={`fixed right-0 transition-all top-0 bottom-0 backdrop-blur-sm backdrop-brightness-50 ${showMenu ? 'left-0' : 'left-[100%]'}`}>
            <div className='flex flex-col bg-white w-64
            mr-0 ml-auto h-full p-4'>
                <ul className='self-end'>
                    <li onClick={handleShowMenu}>
                        <MdOutlineClose size={40} />
                    </li>
                </ul>
                <Links />
            </div>
        </nav>
    )
}
