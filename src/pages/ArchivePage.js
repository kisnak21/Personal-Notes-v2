import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onKeywordHandler = this.onKeywordHandler.bind(this);
  }
  onKeywordHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const filterNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className='archives-page'>
        <h2>Catatan Arsip</h2>
        <section className='search-bar'>
          {" "}
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordHandler}
          />
        </section>

        {filterNotes.length !== 0 ? (
          <NoteList notes={filterNotes} />
        ) : (
          <div className='notes-list-empty'>
            <p className='notes-list__empty'>Tidak ada arsip catatan.</p>
          </div>
        )}
      </section>
    );
  }
}

ArchivePage.proptype = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
