import React from "react";

class GoogleAuth extends React.Component  {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '502195165085-a57p4d762lgu5a5oj4j78ppt106i75rt.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    } 
}

export default GoogleAuth;