import React from "react";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      poster: "",
      comment: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie ${this.state.title} has been successfully added!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
    e.preventDefault();
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Favourite Movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="lastname">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="Poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Comment</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
