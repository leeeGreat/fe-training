import React from 'react';

function useMousePosition() {
  const [position, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });

  function handleMouseMove(e) {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])

  return position;
}

// 和同样功能的高阶组件以及render props方式对比，最突出的特征就是组件层级的降低、数据逻辑抽离出组件
export default function MouseRender() {
  const mouse = useMousePosition();

  return (
    <span>
      Mouse X: {mouse.x} Mouse Y: {mouse.y}
    </span>
  )
}
