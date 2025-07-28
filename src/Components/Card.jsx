import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Homeapps from '../Components/Homeapps';
import Bottomenu from '../Components/Bottomenu';

export default function Card() {
    const [shiftRight, setShiftRight] = useState(false);
    const containerRef = useRef(null);

    const startX = useRef(0);
    const deltaX = useRef(0);
    const isDragging = useRef(false);

    const shiftValue = 288; // match translate-x-72 (72 * 4)

    const handleShiftRight = () => {
        const container = containerRef.current;
        container.style.transition = 'transform 0.25s ease';
        container.style.transform = `translateX(${shiftValue}px)`;
        setShiftRight(true);
    };

    const shiftBack = () => {
        const container = containerRef.current;
        container.style.transition = 'transform 0.25s ease';
        container.style.transform = 'translateX(0px)';
        setShiftRight(false);
    };

    // Touch swipe to left
    useEffect(() => {
        const container = containerRef.current;

        const onTouchStart = (e) => {
            if (!shiftRight) return;
            startX.current = e.touches[0].clientX;
            isDragging.current = true;
            container.style.transition = 'none'; // no animation while dragging
        };

        const onTouchMove = (e) => {
            if (!isDragging.current) return;
            deltaX.current = e.touches[0].clientX - startX.current;

            if (deltaX.current < 0) {
                // Only allow swipe left
                container.style.transform = `translateX(${shiftValue + deltaX.current}px)`;
            }
        };

        const onTouchEnd = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            container.style.transition = 'transform 0.25s ease';

            if (deltaX.current < -50) {
                // Swiped left enough → go back
                shiftBack();
            } else {
                // Not enough → stay shifted right
                container.style.transform = `translateX(${shiftValue}px)`;
            }

            startX.current = 0;
            deltaX.current = 0;
        };

        container.addEventListener('touchstart', onTouchStart);
        container.addEventListener('touchmove', onTouchMove);
        container.addEventListener('touchend', onTouchEnd);

        return () => {
            container.removeEventListener('touchstart', onTouchStart);
            container.removeEventListener('touchmove', onTouchMove);
            container.removeEventListener('touchend', onTouchEnd);
        };
    }, [shiftRight]);

    return (
        <div
            ref={containerRef}
            id="main-container"
            className="relative w-full overflow-hidden"
            style={{
                transform: shiftRight ? `translateX(${shiftValue}px)` : 'translateX(0)',
                transition: 'transform 0.25s ease',
            }}
        >
            <Navbar onLeftClick={handleShiftRight} />
            <div className="pt-16 pb-16">
                <Homeapps />
            </div>
            <Bottomenu />
        </div>
    );
}
