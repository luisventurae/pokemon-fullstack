export default interface Character {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}
