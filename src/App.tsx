import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulo";
import Tabela from "./components/Tabela";
import useDadosConsulta from "./UseDadosConsulta";
import Grafico from "./components/Grafico";
import useDadosProfissional from "./UseDadosProfissional";
import Avaliacao from "./components/Avaliacao";
import Botao from "./components/Botao";
import Subtitulo from "./components/Subtitulo";

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição");
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>{" "}
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
