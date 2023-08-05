export default function AdminPage(props) {
    console.log(props.port)
    
    return (
        <>
            Hi
        </>
    )
} 

export async function getServerSideProps() {
  const BACK_END_PORT = 'http://localhost:5000';

  return { props: { port: BACK_END_PORT } };
}