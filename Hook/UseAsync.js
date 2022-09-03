const UseAsync = async (url, ...method) => {
  try {
    const res = await fetch(url, ...method);
    // const data = await res.json();
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default UseAsync;
