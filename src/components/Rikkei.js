import React from 'react'

export default function Rikkei(props) {
    return (
        <div>
            <h2>{props.rikkei}</h2>
            <p>Công ty công nghệ hàng đầu {props.children}</p>
        </div>
    )
}
