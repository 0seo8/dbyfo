const request = async (url) => {
  try {
    const respose = await fetch(url);
    if (respose.ok) {
      const data = await respose.json();
      return data;
    }
    const errData = await respose.json();
    throw errData;
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  const result = await request('/data.json');
  return result;
};

export default getData;
