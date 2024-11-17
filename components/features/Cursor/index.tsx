'use client';

import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

type Position = {
  x: number;
  y: number;
};

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  const pathname = usePathname();

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseUp = () => {
    setClicked(false);
    setIsSelecting(false);
  };

  const onMouseDown = () => {
    setClicked(true);
    setIsSelecting(true);
  };

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onMouseDown);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousedown', onMouseDown);
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHovered(true));
      el.addEventListener('mouseout', () => setLinkHovered(false));
      el.addEventListener('click', () => setLinkHovered(false));
    });
  };

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [pathname, addEventListeners, removeEventListeners]);

  const cursorClasses = classNames('Cursor', {
    CursorClicked: clicked,
    CursorHidden: hidden,
    CursorLinkHovered: linkHovered,
  });

  return (
    <div
      className={`${cursorClasses} Cursor${isSelecting ? 'Hidden' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        visibility: position.x === 0 && position.y === 0 ? 'hidden' : 'visible',
      }}
    />
  );
};

export default Cursor;
