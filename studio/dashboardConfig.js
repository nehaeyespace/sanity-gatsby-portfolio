export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617bb39a97042db6e4c0b467',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t1r5mn8c',
                  apiId: '769b4c36-7af5-4f90-80af-331b1bfa3361'
                },
                {
                  buildHookId: '617bb39a8528aca5fb95d621',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-quteuicq',
                  apiId: '68eadb13-f335-4d20-bbd5-663a850eb229'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nehaeyespace/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-quteuicq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
