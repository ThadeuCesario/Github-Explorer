/**
 * FC -> Function Component
 */

import React, {useState, useEffect, FormEvent} from 'react';
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories, Error} from './styles';

/**
 * Sempre que criamos um estado que não é um valor padrão, tipo string, número ou boolean.
 * Mas sim um valor composto como um array ou objeto, devemos definir o tipo deles.
 *
 * Lembre-se que precisamos colocar na tipagem SOMENTE AS INFORMAÇÕES que serão
 * utilizadas.
 *
 * Lembre-se que usamos o useEffect para disparamos uma função, sempre que uma determinada
 * variável for alterada.
 * useEffect(() => {}, []);
 */

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories){
      /**
       * Como convertemos anteriormente, precisamos realizar outra conversão
       * para transformá-lo em um array.
       */
      return JSON.parse(storagedRepositories)
    }
    else{
      return [];
    }
  });

  /**
   * Sempre que eu tiver uma mudança em 'repositories', estou armazenando
   * a informação em localStorage. Porém como não consigo armazenar um array inteiro,
   * estou convertendo primeiramente para uma string.
   */
  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    /**
     * 1 -> Adição de um novo repositório.
     * 2 -> Consumir API do github.
     * 3 -> Salvar novo repositório no estado.
     *
     * Veja que passamos como parametro do FormEvent o HTMLFormElement, lembre-se
     * que precisamos importá-lo lembrando que esse elemento significa o HTML
     * do form. O FormEvent representa o evento de submit do formulário.
     */

     event.preventDefault();

     if(!newRepo){
      setInputError('Digite o autor/nome do repositório');
      return;
     }

     try{
       const response = await api.get<Repository>(`repos/${newRepo}`);

       /**
        * Lembrando que 'response.data' estarão armazenados
        */
       const repository = response.data;

       setRepositories([...repositories, repository]);

       setNewRepo('');
       setInputError('');
     }catch(error){
       setInputError('Erro na busca por esse repositório.');
     }
  }

  return (
    <React.Fragment>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)} type='text' placeholder='Digite o nome do repositório'/>
        <button type="submit">Pesquisar</button>
      </Form>

      {/* Vamos precisar adicionar um erro desde que exista.
        * Dentro do react conseguimos colocar uma forma de if simplificada.
        * Em um caso de um if que não necessita de um else, podemos criá-lo
        * seguindo o formato abaixo.
        *
        * Seguindo o modelo:
        * {inputError && <Error>{inputError}</Error>}
        * Apenas se o inputError for true, o bloco ao lado será renderizado.
        */}

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </React.Fragment>
  );

}

export default Dashboard;
