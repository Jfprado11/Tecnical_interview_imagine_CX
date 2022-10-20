export const COLUMNS = [
  { Header: 'Id', accessor: 'id' },
  { Header: 'Nombre', accessor: 'name' },
  { Header: 'Organización', accessor: 'organization' },
  { Header: 'Ciudad', accessor: 'city' },
];

export const restrucData = (data) => {
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    if (data.items) {
      return data.items[0].rows.map((item) => {
        return {
          id: item[0],
          name: item[1],
          organization: item[2],
          city: item[3],
        };
      });
    }
  }
  return [];
};
