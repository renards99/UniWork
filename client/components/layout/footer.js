// import styles from '../../public/static/css/Footer.module.scss';
import Image from 'next/image';
// const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className='bg-gray-100 py-14'>
      <div className='grid grid-cols-4'>
        <Image
          className='w-52 h-52 mx-auto'
          src='/static/images/FptUni.png'
          width='120'
          height='120'
          alt='img'
        ></Image>
        <Image
          className='w-52 h-52 mx-auto'
          src='/static/images/FptUni.png'
          width='120'
          height='120'
          alt='img'
        ></Image>
        <Image
          className='w-52 h-52 mx-auto'
          src='/static/images/FptUni.png'
          width='120'
          height='120'
          alt='img'
        ></Image>
        <Image
          className='w-52 h-52 mx-auto'
          src='/static/images/FptUni.png'
          width='120'
          height='120'
          alt='img'
        ></Image>
      </div>
    </footer>
  );
}

export default Footer;
