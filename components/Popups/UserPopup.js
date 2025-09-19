'use client';
import { useState } from 'react';

export default function UserPopup({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="login-overlay active" onClick={onClose}></div>

      <section className="login active">
        <div className="login-box">
          {/* Close button */}
          <button className="login-close-btn" onClick={onClose}>
            ✕
          </button>

          {/* Tabs */}
          <div className="login-tab">
            <p
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => setActiveTab('login')}
            >
              Sign In
            </p>
            <p
              className={activeTab === 'register' ? 'active' : ''}
              onClick={() => setActiveTab('register')}
            >
              Register
            </p>
          </div>

          <div className="login-tabs-content">
            {activeTab === 'login' && (
              <div className="login-register-content">
                <form className="login-form">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-input" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder="Enter your password" />
                    <div className="login-extras">
                      <div className="remember-me">
                        <input type="checkbox" className="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="checkbox-label">Remember me</label>
                      </div>
                      <a href="#">Forgot?</a>
                    </div>
                  </div>
                  <div className="login-button">
                    <button type="submit">Sign In</button>
                  </div>
                </form>

                <p className="line-or">or</p>
                <div className="google-login">
                  <span className="flat-color-icons--google"></span> Continue with Google
                </div>
                <p className="dont-have-account">
                  Don't have an account? <a onClick={() => setActiveTab('register')}>Create one</a>
                </p>
              </div>
            )}

            {activeTab === 'register' && (
              <div className="login-register-content">
                <form className="login-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input type="text" className="form-input" placeholder="First name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last name</label>
                      <input type="text" className="form-input" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-input" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder="Password" />
                  </div>
                  <div className="login-button">
                    <button type="submit">Register</button>
                  </div>
                </form>

                <p className="line-or">or</p>
                <div className="google-login">
                  <span className="flat-color-icons--google"></span> Continue with Google
                </div>
                <p className="dont-have-account">
                  Already have an account? <a onClick={() => setActiveTab('login')}>Login</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
