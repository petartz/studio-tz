export default function useScroll(ref: any) {
    const scrollInto = (): void => {
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return { scrollInto };
}