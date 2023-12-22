"use client";

import { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

type Position = {
  x: number;
  y: number;
};

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 }),
    [hidden, setHidden] = useState(false),
    [clicked, setClicked] = useState(false),
    [linkHovered, setLinkHovered] = useState(false);

  const pathname = usePathname();

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousedown", onMouseDown);
  }, []);

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
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
      el.addEventListener("click", () => setLinkHovered(false));
    });
  };

  useEffect(() => {
    if (typeof navigator !== "undefined" && isMobile()) {
      return;
    }
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [pathname, addEventListeners, removeEventListeners]);

  const cursorClasses = classNames("Cursor", {
    CursorHidden: hidden,
    CursorClicked: clicked,
    CursorLinkHovered: linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
