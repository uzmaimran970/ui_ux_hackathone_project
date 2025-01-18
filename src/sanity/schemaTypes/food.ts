export default {
    name: 'food',
    title: 'Food',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the food item',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Category of the food (e.g., Drink, Dessert, Sandwich, etc.)',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Current price of the food item',
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'number',
        description: 'Original price before discounts (if any)',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Tags for the food item (e.g., Healthy, Popular, Cheesy)',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows image cropping
        },
        description: 'Image of the food item',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A brief description of the food item',
      },
      {
        name: 'available',
        title: 'Available',
        type: 'boolean',
        description: 'Indicates if the food item is available or not',
      },
    ],
  };
  