import React from 'react'

export default function contactPage () {
    return (
        <div>
            <form>
                <label type="email" placeholder="please enter email address"> 
                    Email address
                </label>

                <label type="password" placeholder="please enter your password">
                    Password
                </label>

                <label type="checkbox">
                    Click to sign up for additional offers and promotions
                </label>

                <input type="button">
                    Submit
                </input>
            </form>
        </div>
    )
}
