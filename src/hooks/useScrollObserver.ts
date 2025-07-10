import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

export const useScrollObserver = (givenRef: any) => {
    const [scrollingIntoArea, setScrollingIntoArea] = useState(false);
    const { scrollInto } = useScroll(givenRef);

    useEffect(() => {
        if (givenRef?.current) {
          console.log(givenRef)
          const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setScrollingIntoArea(entry.isIntersecting);
          })
          observer.observe(givenRef?.current);
        }
      },[givenRef]);
    
      useEffect(() => {
        if (scrollingIntoArea) {
          console.log("scrolling into welcome");
          scrollInto();
        }
      }, [scrollingIntoArea]);
}