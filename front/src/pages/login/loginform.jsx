import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../../api';
import { DispatchContext } from '../../../App';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';


function LoginForm() {
    // const navigate = useNavigate();
    // const dispatch = useContext(DispatchContext);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
    // const validateEmail = email => {
    //     if (email === '') {
    //         return false;
    //     }
    //     return email
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         );
    // };

    // const isEmailValid = validateEmail(email);
    // const isPasswordValid = password.length >= 4;
    // const isFormValid = isEmailValid && isPasswordValid;

    // const handleSubmit = async e => {
    //     e.preventDefault();

    //     try {
    //         const res = await Api.post('user/login', {
    //             email,
    //             password,
    //         });
    //         const user = res.data;
    //         const jwtToken = user.token;
    //         sessionStorage.setItem('userToken', jwtToken);
    //         dispatch({
    //             type: 'LOGIN_SUCCESS',
    //             payload: user,
    //         });

<<<<<<< HEAD
    //         navigate('/', { replace: true });
    //     } catch (err) {
    //         if (err.response && err.response.status === 400) {
    //             alert('비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.');
    //         } else {
    //             alert('로그인에 실패하였습니다.');
    //         }
    //     }
    // };
=======
            navigate('/rank/list', { replace: true });
        } catch (err) {
            if (err.response && err.response.status === 400) {
                alert('비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.');
            } else {
                alert('로그인에 실패하였습니다.');
            }
        }
    };
>>>>>>> 979a339175ce18023cf6b61f080135c7cbe306a5


    return (
<<<<<<< HEAD
        <div>
            <img src="/logoshort.png" alt="오채완 로고" className="logo"></img>

            <div>
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                            Currency
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        // <div className="login-page">
        //     <div className="logo-box">
        //         <img
        //             src="/logoshort.png"
        //             alt="오채완 로고"
        //             className="logo"
        //             style={{
        //                 width: '80%',
        //                 maxWidth: '50vh',
        //             }}></img>
        //     </div>
        //     <Row className="justify-content-center mt-5">
        //         <Col lg={5} md={8} xs={10}>
        //             <Form onSubmit={handleSubmit}>
        //                 <Form.Group controlId="loginEmail">
        //                     <Form.Label>EMAIL</Form.Label>
        //                     <Form.Control
        //                         className="inputLogin"
        //                         placeholder="Email"
        //                         type="email"
        //                         autoComplete="on"
        //                         value={email}
        //                         onChange={e => setEmail(e.target.value)}
        //                     />
        //                     {!isEmailValid && email !== '' && (
        //                         <Form.Text className="text-success">이메일 형식이 올바르지 않습니다.</Form.Text>
        //                     )}
        //                     {!isFormValid && email === '' && (
        //                         <Form.Text className="text-success">이메일을 입력해주세요.</Form.Text>
        //                     )}
        //                 </Form.Group>

        //                 <Form.Group controlId="loginPassword" className="mt-3">
        //                     <Form.Label>PW</Form.Label>
        //                     <Form.Control
        //                         className="inputLogin"
        //                         placeholder="Password"
        //                         type="password"
        //                         autoComplete="on"
        //                         value={password}
        //                         onChange={e => setPassword(e.target.value)}
        //                         style={{ marginBottom: '2rem' }}
        //                     />
        //                     {!isPasswordValid && password !== '' && (
        //                         <Form.Text className="text-success">비밀번호는 4자리 이상입니다.</Form.Text>
        //                     )}
        //                     {!isFormValid && password === '' && (
        //                         <Form.Text className="text-success">비밀번호를 입력해주세요.</Form.Text>
        //                     )}
        //                 </Form.Group>

        //                 <Form.Group as={Row} className="mt-3 text-center">
        //                     <Col sm={{ span: 20 }}>
        //                         <button type="submit" disabled={!isFormValid} className="shadow-button">
        //                             로그인
        //                         </button>
        //                     </Col>
        //                 </Form.Group>

        //                 <Form.Group as={Row} className="mt-3 text-center">
        //                     <Col sm={{ span: 20 }}>
        //                         <button className="shadow-button" onClick={() => navigate('/register')}>
        //                             회원가입
        //                         </button>
        //                     </Col>
        //                 </Form.Group>
        //             </Form>
        //         </Col>
        //     </Row>
        // </div>
=======
        <div className="login-page">
            <div className="logo-box">
                <img
                    src="/logoshort.png"
                    alt="오채완 로고"
                    className="logo"
                    style={{
                        width: '60%',
                        maxWidth: '50vh',
                    }}></img>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex items-center my-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-24">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="flex-grow block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        placeholder="id@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex items-center my-2">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-24">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="flex-grow block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        placeholder="*********"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="mt-8 flex justify-center text-lg text-black">
                    <button 
                        type="submit" 
                        disabled={!isFormValid} 
                        className={`rounded-3xl px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 ${isFormValid ? 'bg-yellow-400 hover:bg-yellow-600' : 'bg-gray-400 cursor-not-allowed'}`}>
                        Login
                    </button>
                    
                </div>
            </form>

    </div>    
>>>>>>> 979a339175ce18023cf6b61f080135c7cbe306a5
    );
}

export default LoginForm;
