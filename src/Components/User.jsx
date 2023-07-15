import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../Store/Users/userSlice';

const Users = () => {
  const { isloading, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(isloading, error, users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if(isloading) {
    return (
      <div><h1>Users are loading</h1></div>
    )
  }
  if(error != null) {
  return(
    <div><h3>{error}</h3></div>
  )
 }
 return (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  </div>
 )

}
export default Users;