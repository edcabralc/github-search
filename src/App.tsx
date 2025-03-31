import { useData } from "@/hooks/useData";

import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";

const App = () => {
  const { data, loading, error } = useData();
  console.log(data, loading, error);

  return (
    <>
      <main>
        <Container>
          <Header />
          <Form />
          {loading ? <Loading /> : <Card />}
          {error ?? <p>error...</p>}
        </Container>
      </main>
    </>
  );
};

export default App;
