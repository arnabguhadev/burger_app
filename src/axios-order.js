import axios from 'axios';


const instance=axios.create({

  baseURL:'https://awesome-burger.firebaseio.com/'
});

export default instance;
