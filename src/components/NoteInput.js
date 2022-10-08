import React from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //init state
    this.state = {
      title: "",
      body: "",
    };

    //binding
    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='add-new-page' onSubmit={this.onSubmitEventHandler}>
        <div className='add-new-page__input'>
          {" "}
          <input
            className='add-new-page__input__title'
            type='text'
            placeholder='Catatan rahasia'
            value={this.state.title}
            onChange={this.onTitleHandler}
          />
          <input
            className='add-new-page__input__body'
            contentEditable='true'
            type='text'
            placeholder='Sebenarnya saya adalah...'
            value={this.state.body}
            onChange={this.onBodyHandler}
          />
          <div className='add-new-page__action'>
            <button className='action' type='submit'>
              <FiPlus />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

NoteInput.propType = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
