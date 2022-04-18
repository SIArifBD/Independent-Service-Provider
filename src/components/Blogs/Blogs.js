import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="bg-info mt-5">
                <h5>1. Qsn: Difference between authorization and authentication?</h5>
                <p>Ans: Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            </div>
            <div className="bg-success">
                <h5>2. Qsn: Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identtity providers like Google, Facebook, Twitter, Github and more.</p>
            </div>
            <div className="bg-primary">
                <h5>3. Qsn: What other services does firebase provide other than authentication?</h5>
                <p>Ans: Firebase Other Services: a) Realtime Database. b) Cloud Firestone. c) Storage. d) Machine Learning. e) Hosting. f) Cloud Function. g) Security Rules.</p>
            </div>
        </div>
    );
};

export default Blogs;