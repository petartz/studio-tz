import { useEffect } from "react";
import useScroll from "../../hooks/useScroll";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const Welcome = ({ setTarget, bioRef, welcomeRef }: any) => {
  const { scrollInto } = useScroll(bioRef);

  useEffect(() => {
    setTarget(bioRef?.current)
  })
  // useScrollObserver(bioRef);

  return (
    <div id={"welcome-id"} ref={welcomeRef} data-next={"bio-id"} className="welcome-page">
      <div className="message">
        <p className="name">
          Пеtъr Цоnеvsки
        </p>
      </div>
        <div onClick={scrollInto} id="scroll-panel" className='flex h-screen justify-center'>
          <div className="tall"></div>
          <div className='absolute bottom-3 left-0 right-0'>
            <svg id="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Welcome