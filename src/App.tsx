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

  return (
    <main>
      <Container>
        <Header />
        <Form action={getUser} resetAction={resetSearch} />

        {error && (
          <Card>
            <Error error={error} />
          </Card>
        )}
        {!data && loading && (
          <Card>
            <Loading />
          </Card>
        )}
        {data && (
          <Card>
            <User user={data} />
          </Card>
        )}
      </Container>
    </main>
  );
};

export default App;
