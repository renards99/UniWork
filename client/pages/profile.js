import classNames from 'classnames/bind';
import styles from '../public/static/css/Profile.module.scss';

const cx = classNames.bind(styles);
function Profile() {
  return (
    <div className='w-[1440px] h-[100vh] mx-auto'>
      <img
        className='object-cover h-96 w-full'
        src='https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZSUyMGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80'
        alt='background Pic'
      ></img>

      <div className='h-[15vh]  bg-white items-center'>
        <div className='absolute top-[33%] px-10 flex items-center justify-between w-[1440px]'>
          <div className='flex items-center'>
            <img
              className='w-56 h-56 rounded-full'
              src='https://ih1.redbubble.net/image.4010539606.2368/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='pic'
            ></img>
            <h2 className='text-3xl p-4 font-bold'>Nguyen Van A</h2>
          </div>
          <label className='' for='toggle'>
            <h2 className='font-medium text-2xl'>Working status</h2>
            <input type='checkbox' id='toggle' className={cx('spinner-input', 'hidden')}></input>
            <div className='mx-auto my-4 rounded-full w-[60px] h-[22px] px-1 bg-[#aaaaaa] p-[3px] shadow-xl transition-colors cursor-pointer'>
              <div
                className={cx(
                  'spinner',
                  'shadow-lg transition-transform bg-white h-6 w-6 rounded-full ',
                )}
              ></div>
            </div>
          </label>
        </div>
      </div>

      <div className='flex p-8 gap-10'>
        <div>
          <div className=' overflow-y-auto w-[1000px] flex flex-col gap-20  text-xl'>
            <div className='bg-white flex flex-col  rounded-2xl'>
              <div className='bg-[#7dd7ad] rounded-t-2xl'>
                <h3 className='text-2xl font-medium text-white p-4 '>Education</h3>
              </div>
              <div className='p-4'>
                <ul>
                  <li>FPT University</li>
                  <li>majors: Software engineer</li>
                  <li>From 30/06/2017 to 31/12/2021</li>
                  <li>Description: Coc vang 100</li>
                </ul>
              </div>
            </div>
            <div className='bg-white flex flex-col rounded-2xl text-xl'>
              <div className='bg-[#7dd7ad] rounded-t-2xl'>
                <h3 className='p-4 text-2xl font-medium text-white'>Bio</h3>
              </div>
              <div className='p-4'>
                <ul>
                  <li>FPT University</li>
                  <li>majors: Software engineer</li>
                  <li>From 30/06/2017 to 31/12/2021</li>
                  <li>Description: Coc vang 100</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[440px]'>
          <div className='bg-white rounded-2xl text-xl'>
            <div className='bg-[#7dd7ad] p-4 text-2xl font-medium text-white rounded-t-2xl'>
              <h3>Personal Information</h3>
            </div>
            <div className='p-4 '>
              <ul>
                <li>Email: huy.com.hg@gmail.com</li>
                <li>Phone: 0393958404</li>
                <li>Address: Hanoi</li>
                <li>DOB: 12/09/2001</li>
              </ul>
              <button>Change Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
