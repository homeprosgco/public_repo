import { useEffect, useState } from "react";

function useUpdateViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState<number>(600);

  useEffect(() => {
    function updateViewportHeight() {
      const { innerHeight: height } = window;
      setViewportHeight(height);
    }

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight();
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, [viewportHeight]);

  return viewportHeight;
}

export default useUpdateViewportHeight;
