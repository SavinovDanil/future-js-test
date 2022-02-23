import React, { useState } from 'react';
import './App.css';
import * as _ from 'lodash';
import ReactPaginate from 'react-paginate';

import { Table } from './components/Table/Table';
import Loader from './components/Loader';
import Person from './components/Person/Person';
import { UrlSelector } from './components/UrlSelector/UrlSelector';
import InputSearch from './components/InputSearch/InputSearch';

function App() {
  const [data, setDate] = useState([]);
  const [loader, setLoader] = useState(false);
  const [sort, setSort] = useState('asc'); //Направление сортировки
  const [field, setField] = useState('id'); // Какой столбец сортируем
  const [person, setPerson] = useState(null);
  const [selected, setSelected] = useState(false);
  const [url, setUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    async function fetchAPI(api) {
      const response = await fetch(api).then((data) => data.json());
      setDate(_.orderBy(response, 'id', 'asc'));
      setLoader(false);
    }
    fetchAPI(url);
  }, [url]);

  const onSort = (field) => {
    const clonedData = [...data];
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(clonedData, field, sortType);
    setField(field);
    setDate(orderedData);
    setSort(sortType);
  };

  const onPerson = (person) => {
    setPerson(person);
  };

  const onSelect = (url) => {
    setLoader(true);
    setSelected(true);
    setUrl(url);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  };

  const onClickSearch = (value) => {
    setSearch(value);
    setCurrentPage(0);
  };

  const getFilteredData = () => {
    if (!search) {
      return data;
    }
    return data.filter((item) => {
      return (
        item['firstName'].toLowerCase().includes(search.toLowerCase()) ||
        item['lastName'].toLowerCase().includes(search.toLowerCase()) ||
        item['email'].toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  if (!selected) {
    return <UrlSelector onSelect={onSelect} />;
  }

  const pageSize = 50;

  const filteredData = getFilteredData();

  const displayData = _.chunk(filteredData, pageSize)[currentPage];

  const pageCount = Math.ceil(filteredData.length / pageSize);

  return (
    <div className="container">
      {loader ? (
        <Loader />
      ) : (
        <>
          <InputSearch onClickSearch={onClickSearch} />

          <Table data={displayData} onSort={onSort} onPerson={onPerson} sort={sort} field={field} />
        </>
      )}
      {data.length > pageSize ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-link"
          nextClassName="page-link"
          activeClassName="active"
          forcePage={currentPage}
        />
      ) : null}

      {person ? <Person person={person} /> : null}
    </div>
  );
}

export default App;
