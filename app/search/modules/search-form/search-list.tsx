interface SearchListProps {
  data: string[];
}

const SearchList: React.FC<SearchListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((message: string) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default SearchList;
