/**
 * FC -> Function Component
 */

import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type='text' placeholder='Digite o nome do repositório'/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/27692953?s=460&u=22d37826877e4d4d044e709d0f32359cb8f71f42&v=4" alt="Thadeu Munhóz Cesário" />
          <div>
            <strong>thadeucesario/react-project</strong>
            <p>Projeto completo em React!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/27692953?s=460&u=22d37826877e4d4d044e709d0f32359cb8f71f42&v=4" alt="Thadeu Munhóz Cesário" />
          <div>
            <strong>thadeucesario/react-project</strong>
            <p>Projeto completo em React!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/27692953?s=460&u=22d37826877e4d4d044e709d0f32359cb8f71f42&v=4" alt="Thadeu Munhóz Cesário" />
          <div>
            <strong>thadeucesario/react-project</strong>
            <p>Projeto completo em React!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </React.Fragment>
  );

}

export default Dashboard;
