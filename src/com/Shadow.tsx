import { HTMLAttributes, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom";

export function Shadow({
  mode, ...rest
}: HTMLAttributes<HTMLDivElement> & {
  mode: ShadowRootMode
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot>();

  useEffect(() => {
    if (ref.current?.shadowRoot == null)
      setShadowRoot(ref.current!.attachShadow({ mode: mode }));
  }, [mode])

  return (
    <div ref={ref} {...rest}>
      {shadowRoot && ReactDOM.createPortal(rest.children, shadowRoot)}
    </div>
  )
}
