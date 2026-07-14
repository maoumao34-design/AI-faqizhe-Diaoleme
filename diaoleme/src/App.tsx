import { useEffect, useRef } from 'react'
import { prototypeBody, prototypeScript, prototypeStyle } from './prototypeHtml'

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let styleTag = document.getElementById('diaoleme-prototype-style') as HTMLStyleElement | null
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'diaoleme-prototype-style'
      document.head.appendChild(styleTag)
    }
    styleTag.textContent = prototypeStyle

    if (rootRef.current) {
      rootRef.current.innerHTML = prototypeBody
      new Function(prototypeScript)()
    }

    return () => {
      if (rootRef.current) rootRef.current.innerHTML = ''
    }
  }, [])

  return <div ref={rootRef} />
}
