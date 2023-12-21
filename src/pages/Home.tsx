import Background from '../assets/images/balloons.jpeg';

function Home() {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover', 
    }} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center  h-screen'style={{ marginTop: '-100px' }}>
          <h3 className='p-5 text-7xl font-bold bg-white bg-opacity-5 text-gray-900 rounded'>Enjoy the Journey</h3>
        </div>
    </div>
  )
}

export default Home