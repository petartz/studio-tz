import { useEffect, useRef } from "react";

export const EyeTracker = () => {
    const eyeRef = useRef<HTMLDivElement>(null);
    const retinaRef = useRef<HTMLDivElement>(null);
    const pupilRef = useRef<HTMLDivElement>(null);

    // Internal animation state
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    let targetSize = 12;
    let currentSize = 12;

    // Animate function with interpolation
    useEffect(() => {
        // Center on the page
        if (eyeRef.current) {
            console.log(window.innerWidth)
            const centerX = ((window.innerWidth) - (eyeRef.current.clientWidth)) / 2;
            eyeRef.current.style.left = `${centerX}px`;
        }

        const animate = () => {
        if (retinaRef.current && pupilRef.current) {
            currentX += (targetX - currentX) * 0.15;
            currentY += (targetY - currentY) * 0.15;

            retinaRef.current.style.left = `${currentX}px`;
            retinaRef.current.style.top = `${currentY}px`;

            currentSize += (targetSize - currentSize) * 0.15;
            pupilRef.current.style.width = `${currentSize}px`;
            pupilRef.current.style.height = `${currentSize}px`;
        }
        requestAnimationFrame(animate);
        };
        animate();
    }, []);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!eyeRef.current || !retinaRef.current) return;

            const eyeRect = eyeRef.current.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            const dx = e.clientX - eyeCenterX;
            const dy = e.clientY - eyeCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            // Adjust bounds for elliptical eye
            const paddingX = eyeRef.current.clientWidth * 0.05; // 10% padding
            const paddingY = eyeRef.current.clientWidth * 0.05;
            const maxX = (eyeRef.current.clientWidth / 2) - (retinaRef.current.clientWidth / 2) - paddingX;
            const maxY = (eyeRef.current.clientHeight / 2) - (retinaRef.current.clientHeight / 2) - paddingY;

            const moveX = Math.cos(angle) * maxX;
            const moveY = Math.sin(angle) * maxY;

            const centerX = (eyeRef.current.clientWidth - retinaRef.current.clientWidth) / 2;
            const centerY = (eyeRef.current.clientHeight - retinaRef.current.clientHeight) / 2;

            targetX = centerX + moveX;
            targetY = centerY + moveY;

            // Dramatic pupil dilation
            const minSize = 8;
            const maxSize = 15;
            const maxDistance = window.innerWidth * 0.6;
            const normalized = Math.min(distance, maxDistance) / maxDistance;
            targetSize = minSize + normalized * (maxSize - minSize);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="eye-container">
        <div ref={eyeRef} className="eye">
            <div ref={retinaRef} className="retina">
            <div ref={pupilRef} className="pupil"></div>
            </div>
        </div>
        </div>
    );
};