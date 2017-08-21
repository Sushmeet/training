'use strict';

function AuthController() {
    var roles;
    function setUserRole(role) {
        roles = role
    }

    function isAuthorized(neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(neededRole, cb) {
        // asynch logic
        setTimeout(function () {
            cb(roles.indexOf(neededRole) >= 0);
        }, 0);
    }

    return {
        isAuthorized,
        isAuthorizedAsync,
        setUserRole
    }
}

module.exports = AuthController()