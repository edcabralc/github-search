import { useData } from "@/hooks/useData";

import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { Header } from "./components/header";

const App = () => {
  const { data, loading, error } = useData();

  return (
    <>
      <main>
        <Container>
          <Header />
          <Form />
          <Card.Body>
            <Card.Image url={data?.avatar_url} />
            info
            <Card.Name name={data?.name} />
            <Card.Bio bio={data?.bio} />
          </Card.Body>
          {loading && !data ? (
            <div>Carregando...</div>
          ) : (
            <div>
              {error && <p>{error}</p>}
              {
                !error && data && "temp"
                // <Card>
                //   info
                //   <p>{data?.name ? data.name : "Nome não cadastrado"}</p>
                //   <p>{data?.bio ? data.bio : "Bio não cadastrada"}</p>
                //   <img src={data?.avatar_url} alt="Imagem de perfil" />
                // </Card>
              }
            </div>
          )}
        </Container>
      </main>
    </>
  );
};

export default App;
