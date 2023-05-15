import { fetchURL } from "../lib/routes";
import DevelopperList from "../components/developer/DeveloperList";
import useFetch from "../hooks/useFetch";
import { Text } from "@chakra-ui/react";
const Home = () => {
  const { data, loading, error } = useFetch(fetchURL);
  if (error) {
    console.log(error);
  }
  return <>
  {loading && <Text>Loading data...</Text>}
  {data && <DevelopperList developers={data} />}</>;
};

export default Home;
