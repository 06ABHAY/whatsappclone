import React,{ useState, useEffect,useContext }from 'react';
import Conversation from './Conversation';
import { Box, styled,Divider} from '@mui/material';
import { getUsers } from '../../../service/api';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


function Conversations({text}) {

  const [users, setUsers] = useState([]);
 const { account,socket,setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
        let response = await getUsers();
       let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(fiteredData);
    }
    fetchData();
}, [text]);

useEffect(() => {
  socket.current.emit('addUsers', account);
  socket.current.on("getUsers", users => {
     setActiveUsers(users);
  })
}, [account])

  return (
    
    <Component>
    {
        users.map((user, index) => ( 
          user.sub !== account.sub && <>
           <Conversation user={user} />
           <StyledDivider />
           </>
        ))
    }
           </Component>

  )
}

export default Conversations;