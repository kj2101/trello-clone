const cards = [
    {
      id: 'card-1',
      content: 'Get up early!',
    },
    {
      id: 'card-2',
      content: 'Go for walk!',
    },
    {
      id: 'card-3',
      content: 'Eat Breakfast',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      },
     
    },
    listIds: ['list-1'],
  };
  
  export default data;