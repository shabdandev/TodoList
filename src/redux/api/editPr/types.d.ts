namespace TODO {
  type editResponse = {
    _id: number;
    name: string;
    description: string;
    image: string;
  };

  type editRequest = {
    _id: number;
    edited: {
      name: string;
      description: string;
      image: string;
    };
  };
}
