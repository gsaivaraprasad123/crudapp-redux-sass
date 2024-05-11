import Image from "next/image";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
import variables from "./styles/variables.module.scss"


export default function Home() {
  return (
    <main className={variables.main} >
      <h2>User Management CRUD App using Nextjs and Redux</h2>
       <AddUsers />
       <DisplayUsers/>
    </main>
  );
}
