import { mount } from 'VueApp/Counter'
import React, { useRef, useEffect } from 'react'

export default (props) => {
    const ref = useRef(null);

    useEffect(() => {
        mount({selector: ref.current, config: {...props.config}})
    }, [])

    return <div ref={ref} />
}