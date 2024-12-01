namespace TODO {
  type editResponse = {
    id: number;
    name: string;
    description: string;
    image: string;
  };

  type editRequest = {
    id: number;
    edited: {
      name: string;
      description: string;
      image: string;
    };
  };
}
