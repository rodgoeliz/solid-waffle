/* eslint-disable max-len */



 const MOCK_USER = { id: 1, name: 'Mr Roberts' };


 const MOCK_RECIPE = {
  id: 1,
  name: 'recipe name',
  author: MOCK_USER,
  creationDate: '2022-06-15T22:57:56.681Z',
  cookTime: 145,
  steps: [
    'Given that EngagedMD is growing really fast, and employees will be able to post their recipes at any point in the year, we can expect the system to handle thousands of recipes.',
    'Always keep in mind that your code will be maintained by other people. And you need your team to be able to collaborate on it as quickly and easily as possible.',
    'The app will continue to grow with new and similar features. You should write your code with that in mind. So every component should be reusable.',
    'We expect that most of the users will access the website through their mobile devices.',
  ],
  ingredients: ['react', 'typescript', 'react-query'],

};



module.exports = () => {
    const data = { users: [...Array(100).keys()].map(id=> ({...MOCK_USER, id:`${id+1}`})),
                  recipes: [...Array(10).keys()].map(id=> ({...MOCK_RECIPE,author:{...MOCK_USER, id:`${id+1}`}, id:`${id+1}`})),
                  favorites: [1,2,3,4].map(id=> ({id:`${id}`}))}; //Had to do this doble id to make _embed work on json Server 
 

    
    return data;
  };
