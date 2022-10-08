import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { deleteNote, getActiveNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordHandler = this.onKeywordHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    //update the note state from local-data.js
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
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
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <main>
        <section className='homepage'>
          <h2>Catatan Aktif</h2>
          <section className='search-bar'>
            <SearchBar
              keyword={this.state.keyword}
              keywordChange={this.onKeywordHandler}
            />
          </section>

          <NoteList notes={notes} onDelete={this.onDeleteHandler} />
        </section>
      </main>
    );
  }
}

export default HomePageWrapper;
