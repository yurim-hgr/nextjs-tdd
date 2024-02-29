"use client";

import { useState } from "react";
import NewSearchForm from "./search-form";
import SearchList from "./search-list";

export default function Search() {
  // const [data, setData] = useState<ResultData>([]);

  // const fetchData = async (keyword: string) => {
  //   const response: ResponseType = await axios({
  //     url: "/search",
  //     method: "get",
  //     data: { keyword },
  //   });
  //   setData(response.data.data);
  // };
  const [search, setSearch] = useState<string[]>([]);

  function handleSend(newSearch: string) {
    setSearch([newSearch, ...search]);
  }

  return (
    <>
      <h1>search</h1>
      <NewSearchForm onSend={handleSend} />
      <SearchList data={search} />
    </>
  );
}
{
  /* <SearchInput onPress={fetchData} />
<SearchResultList data={data} /> */
}
