import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import NotFound from './pages/not-found';
import SignUp from './pages/sign-up';
// import { sendQuery } from './request';

function MainRouter() {
  // const [isLogin, setLoginStatus] = useState(
  //   window.localStorage.getItem('x-jwt')
  //     ? window.localStorage.getItem('x-jwt')
  //     : null
  // );
  // const [userObj, setUserObj] = useState(null);
  // useEffect(() => {
  //   const requestUser = async () => {
  //     const user = await sendQuery(`http://localhost:4000/user`, {
  //       'x-jwt': isLogin,
  //       test: 'asdasd',
  //     });
  //     if (user) setUserObj(user);
  //     else alert('Error: Can not get user');
  //   };

  //   if (isLogin && !userObj) requestUser();
  // }, [isLogin, userObj]);
  return (
    <BrowserRouter>
      {/* {isLogin && userObj ? ( */}
      {false ? (
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default MainRouter;
