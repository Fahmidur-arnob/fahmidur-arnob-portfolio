import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioCardItem from './PortfolioCardItem';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
               <PortfolioCardItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  client_side_code={project.client_side_code}
                  server_side_code={project.server_side_code}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio;