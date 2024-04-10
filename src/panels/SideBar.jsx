import { XIcon } from '@heroicons/react/outline'
import { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import SnapshotButton from '../components/reusable/button-components/SnapshotButton'

const SideBar = (props) => {
    const theme = useContext(ThemeContext)


    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className="w-full border-gray-600 border-b pb-4 mt-4 mx-auto">
                <SnapshotButton
                theme={theme.theme}
                    onClick={() => setShowModal(true)}
                >
                    SHOW ATTACHMENT
                </SnapshotButton>
            {showModal ? (
                <>
                <div className="fixed top-0 left-0 z-50 p-10 backdrop-blur-lg bg-white/80 w-screen h-screen flex justify-center">
                    <button onClick={() => {showModal && setShowModal(false)}} >
                        <XIcon className="text-gold-600 fixed h-9 w-9 lg:top-5 lg:right-5 md:top-5 md:right-2.5 top-5 right-2.5" />
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

export default SideBar
