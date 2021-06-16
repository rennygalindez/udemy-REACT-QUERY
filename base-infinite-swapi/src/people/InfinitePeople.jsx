import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';
import { useInfiniteQuery } from 'react-query';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery(
      'infinite-people',
      ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      {
        getNextPageParam: function (lastPage) {
          return lastPage.next || undefined;
        },
      },
    );
  if (isError) return <div>Error {error.toString()}</div>;
  if (isLoading) return <div>Loading... </div>;
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((page) => {
        return page.results.map((person) => <Person {...person}></Person>);
      })}
    </InfiniteScroll>
  );
}
