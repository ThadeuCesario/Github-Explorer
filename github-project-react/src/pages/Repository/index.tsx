/**
 * FC -> Function Component
 */

import React from 'react';
import {useRouteMatch} from 'react-router-dom';

/**
 * Dentro de useRouteMatch, teremos o parâmetro da rota.
 */

 interface RepositoryParams{
   repository: string;
 }

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>();

return <h1>Repository: {params.repository}</h1>
}

export default Repository;
