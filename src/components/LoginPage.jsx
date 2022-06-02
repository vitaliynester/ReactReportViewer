import React from 'react';

const LoginPage = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginClick = () => {
        if (login == 'admin' && password == 'password') {
            localStorage.setItem('login', true);
        } else {
            alert('Указанные данные неправильные!')
        }
    }

    return (
        <div className="container mt-5">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label">Логин</label>
                            <input onChange={handleLoginChange} type="text" id="loginName" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Пароль</label>
                            <input onChange={handlePasswordChange} type="password" id="loginPassword" className="form-control" />
                        </div>

                        <button onClick={handleLoginClick} className="btn btn-primary btn-block mb-4 w-100">Войти</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;