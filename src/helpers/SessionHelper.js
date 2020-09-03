/**
 * Helper for user seessioh
 * Determine user is logged in
 * Hold the user information if logged in
 */
class SessionHelper{
    user = null;
    isLoggedIn = false;

    constructor(){
        const userInfo = localStorage.getItem('user');
        if(userInfo){
            this.user = JSON.parse(userInfo);
            this.isLoggedIn = true;
        }
    }

    setUser(user){
        this.user = user;
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
    }

    deleteUser(){
        localStorage.removeItem('user');
        this.user = null;
        this.isLoggedIn= false;
    }

    getUser(){
        return this.user;
    }

    
    getIsLoggedIn(){
        return this.isLoggedIn;
    }
}

export default new SessionHelper();