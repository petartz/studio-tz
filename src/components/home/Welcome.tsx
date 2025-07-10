import useScroll from "../../hooks/useScroll";
import { useScrollObserver } from "../../hooks/useScrollObserver";

const Welcome = ({ bioRef, welcomeRef }: any) => {
  const { scrollInto } = useScroll(bioRef);
  useScrollObserver(bioRef);

  return (
    <div ref={welcomeRef} className="welcome-page">
      <div className="message">
        <p className="name">
          Пеtъr Цоnеvsки
        </p>
      </div>
        <div onClick={scrollInto} id="scroll-panel" className='flex flex-row bottom-0 h-screen justify-center align-center'>
          <div className="tall"></div>
          <div className='absolute bottom-5 ml-6 justify-center align-center'>
            <svg id="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Welcome