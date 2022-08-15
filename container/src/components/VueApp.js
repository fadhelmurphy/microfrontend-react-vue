import { mount } from 'VueApp/Counter'
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount({selector: ref.current})
    }, [])

    return <div ref={ref} />
}