/**
 * FC -> Function Component
 */

import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

/**
 * Dentro de useRouteMatch, teremos o parâmetro da rota.
 */


  import logoImg from '../../assets/logo.svg';
  import {Header, RepositoryInfo, Issues} from './styles';

  interface RepositoryParams{
    repository: string;
  }

  const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();

    return (
      <React.Fragment>
        <Header>
          <img src={logoImg} alt='Github Explorer' />
          <Link to='/'>
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </Header>

        <RepositoryInfo>
          <header>
            <img src="https://avatars1.githubusercontent.com/u/27692953?v=4" alt="Thadeu" />
            <div>
              <strong>
                thadeucesario/javascript
              </strong>
              <p>
                descrição do repositório.
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>1808</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>48</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>67</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>

        <Issues>
        <Link to={`qualquer coisa`}>
            <div>
              <strong>qualquer coisa</strong>
              <p>qualquer coisa</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </Issues>
      </React.Fragment>
    );
  }

export default Repository;
