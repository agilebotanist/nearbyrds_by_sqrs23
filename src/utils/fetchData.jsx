export const fetchData = async (
  country,
  setBirds,
  setFilteredBirds,
  setLoading
) => {
  try {
    setLoading(true);
    const res = await fetch(
      `https://xeno-canto.org/api/2/recordings?query=cnt:${country}&page=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const results = await res.json();
    setBirds(results.recordings);
    setFilteredBirds(results.recordings);
    setLoading(false);
    return "";
  } catch (error) {
    console.log(error.message);
  }
};

export const searchFunc = (bird, item) =>
  bird.en.toLowerCase().includes(item.toLowerCase().trim()) ||
  bird.sp.toLowerCase().includes(item.toLowerCase().trim()) ||
  bird.loc.toLowerCase().includes(item.toLowerCase().trim());