import { useEffect, useState } from "react";

function ScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight,
    clientHeight = document.documentElement.clientHeight,
    height = scrollHeight - clientHeight;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      setWidth((scrollTop / height) * 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [height]);

  return <div className="scroll-progress" style={{ width: `${width}%` }}></div>;
}

export default ScrollProgress;
