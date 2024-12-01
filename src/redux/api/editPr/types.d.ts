namespace TODO {
  type editResponse = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

  type editRequest = {
    id: number;
    edited: {
      title: string;
      description: string;
      image: string;
    };
  };
}
