import React from "react";

function RegisterStaffPage() {
    
    return (
        <>
            <div className="container">
                <h1>Register New User</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="nameInput" name="nameInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateJoinedInput" className="form-label">Date Joined (yyyy-mm-dd)</label>
                        <input type="text" className="form-control" id="dateJoinedInput" name="dateJoinedInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="titleInput" className="form-label">Title</label>
                        <input type="text" className="form-control" id="titleInput" name="titleInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">Username</label>
                        <input type="text" className="form-control" id="usernameInput" name="usernameInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordInput" name="passwordInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirmInput" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordConfirmInput" name="passwordConfirmInput" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>
        </>
    )
}

export default RegisterStaffPage;