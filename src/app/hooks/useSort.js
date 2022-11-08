export const useSort = () => {
  const sortByName = (data) => {
    const dataSorted = data
      .slice()
      .sort((a, b) => (a.first_name < b.first_name ? -1 : 1));
    return dataSorted;
  };

  return [sortByName];
};
