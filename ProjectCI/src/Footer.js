import React from 'react'

export default class Footer extends React.Component {
    render() {
    	const style = {
	    	textAlign: 'center',
            height:66,
            background: '#42a5f5',
            padding: 0.1,
            color: '#fff',
            fontFamily: 'sans-serif',
            fontSize: 15,
            position: 'fixed',bottom:0, left: 0, right: 0
	    }
        return (
            <footer style={style}>
                <p>
                    Facebook | Google Plus | Twitter | Youtube
                </p>
                <p>
                    Copyright 2016 jarvis.com. All rights reserved.
                </p>
            </footer>
        )
    }
}