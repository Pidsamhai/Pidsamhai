declare module "*.json" {
  const value: {
    [key: string]: {
      color: string;
      url: string;
    };
  };
  export default value;
}
