import { useData } from "@/hooks/useData";
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";
import { Error } from "@/components/error";
import { User } from "@/components/user";

const App = () => {
  const { data, loading, error, getUser, resetSearch } = useData();
  console.log(data, loading, error);

  return (
    <>
      <main>
        <Container>
          <Header />
          <Form action={getUser} resetAction={resetSearch} />
          <Card>
            {!data && loading && <Loading />}
            {error ?? <Error error={error} />}
            {data && <User user={data} />}
          </Card>
        </Container>
      </main>
    </>
  );
};

export default App;
