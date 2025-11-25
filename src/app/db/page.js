import { addUser } from "./actions";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";

export default function Page(){
  return (
    <main>
      <h1>SWR+Prismaの例</h1>
      <UserList />

      <AddUserForm addUser={addUser} />
    </main>
  );
}