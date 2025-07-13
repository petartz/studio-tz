import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import SnapshotButton from './buttons/SnapshotButton'

const Modal = () => {
    const theme = useContext(ThemeContext)
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className="w-full text-center content-center pb-4 mt-4 mx-auto">
                <SnapshotButton 
                    className="m-auto"
                    theme={theme.mode}
                    onClick={() => setShowModal(true)}
            />
            {showModal ? (
                <>
                <div onClick={() => setShowModal(false)} className="fixed top-0 left-0 z-50 p-10 backdrop-blur-lg w-screen h-screen flex justify-center">
                    <button onClick={() => {showModal && setShowModal(false)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-gold-600 fixed h-9 w-9 lg:top-5 lg:right-5 md:top-5 md:right-2.5 top-5 right-2.5">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>

                        {/* <XIcon className="text-gold-600 fixed h-9 w-9 lg:top-5 lg:right-5 md:top-5 md:right-2.5 top-5 right-2.5" /> */}
                    </button>
                    <img
                        className="object-scale-down lg:max-w-[80%]"
                        src="https://i.imgur.com/A3Vtb2k.jpg"
                        alt='nana'
                    ></img>
                </div>
                </>
            ) : null}
          </div>
        </>

    )
}
export default Modal