import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/lab8spendmoney.appspot.com/o/web_profile.jpg?alt=media&token=b26970b2-bdef-42cb-abaf-9fb9ae93f9c7'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Thanadon Inthasit (610610584)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
