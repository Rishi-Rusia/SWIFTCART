import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

export default function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>HOME</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
