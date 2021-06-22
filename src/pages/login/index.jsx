import React from 'react'
import {Form} from 'antd';
import './style.css'

export const Login = () => {
    return (
        <div className="app-static-wrapper">
            <div className="app-static-logo">
                asdasd
            </div>
            <Form id="login-form">
                <div className="app-form-full">
                    <div className="app-form-label">Email *</div>
                    <input type="email"></input>
                </div>
                <div className="app-form-full">
                    <div className="app-form-label">Email *</div>
                    <input type="email"></input>
                </div>
                <div class="app-form-full">
                    <a id="forgot-password-link" href="/accounts/password-reset/">Forgotten password?</a>
                </div>
                <div class="app-form-full">
					<button type="submit" id="login-button" class="app-cta-btn primary">
						Log in
					</button>
            	</div>
            	<div class="app-form-full">
                    <a id="new-to-company-link" href="/users/buyer-registration/" class="app-cta-btn secondary">
                        Sign Up
                    </a>
                </div>
            </Form>
        </div>
    )
}
