import axios from 'axios';
import Cookies from 'js-cookie';

export const loginAccount = async (user, password, back_end_port, router) => {
  const submitData = {
    user,
    password,
  };
  try {
    const login = await axios.post(`${back_end_port}/login`, submitData, {
      withCredentials: true,
    });
    if (login.data.statusCode === 200) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...login.data.data.dataValues,
          token: login.data.data.accessToken,
        }),
      );
    }
    if (login.data.data.dataValues.role_id == 1) {
      Cookies.set('sideBarActive', 1);
      router.push('/admin/account-manager');
    }
    if (login.data.data.dataValues.role_id == 2) {
      Cookies.set('sideBarActive', 1);
      router.push('/employer/post-list');
    }
    if (login.data.data.dataValues.role_id == 3) {
      router.push('/candidate');
    }
  } catch (error) {
    console.log(error);
  }
};
