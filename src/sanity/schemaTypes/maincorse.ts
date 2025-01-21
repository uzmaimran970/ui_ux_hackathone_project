// schemas/starterMenu.js
export default {
    name: 'mainCorse',
    title: 'Main course',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Menu Item Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'calories',
        title: 'Calories',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  