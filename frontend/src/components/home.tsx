import useAuth from '../shared/hooks/useAuth';

import gifPlaid from '../assets/plaid.gif'

const Home = () => {
const {session} = useAuth()
 
  return (
    <div>
      {!session ?
            <img width={'100%'} src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5e3533a3-015f-48c1-ba50-c53c74909766_1200x675.png" alt="" />
        :      <img width={'100%'} src={gifPlaid} alt="" />

    }

    </div>
  )
}

export default Home