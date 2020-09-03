import React from 'react';
import SessionHelper from '../../../helpers/SessionHelper';
import LanguageHelper from '../../../helpers/LanguageHelper';

/**
 * Initial page of the application
 * Determine a user is logged in
 * After that redirect to a required pages
 * @param {any} props props of the component
 */
const Landing = (props) => {
    const {history} = props;
    const isLoggedIn = SessionHelper.getIsLoggedIn();
    const pushKey = isLoggedIn ? "dashboard" : "login";
    history.push(pushKey);
    
    return(
        <div>

        </div>
    );
}

export default Landing;