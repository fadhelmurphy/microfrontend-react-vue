import { mount } from 'ReactApp/Counter'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default (props) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount({selector: ref.current, config: {...props.config}})
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}