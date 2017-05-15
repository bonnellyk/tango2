import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class SearchClientForm extends Component {
  render() {
    //const { handleSubmit } = this.props;
    const handleSubmit = () => this.props;
    return (
      <form className="form-basic" onSubmit={handleSubmit}>
        <div className="form-title-row">
          <h1>Rechercher un client</h1>
        </div>
        <div className="form-row" >
          <label htmlFor="clientNumber"><span>No Client: </span></label>
          <Field name="clientNumber" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="clientName"><span>Nom: </span></label>
          <Field name="clientName" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="acronym"><span>Acronyme: </span></label>
          <Field name="acronym" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="client_category"><span>Catégorie de client: </span></label>

          <Field name="client_category" component="select">
            <option></option>
            <option value="active">Actif</option>
            <option value="inactive">Inactif</option>
            <option value="all">Tous</option>
          </Field>

        </div>
        <button type="submit">Rechercher</button>
      </form>
    );
  }
}

// Decorate the form component
SearchClientForm = reduxForm({
  form: 'searchClientForm' // a unique name for this form
})(SearchClientForm);

export default SearchClientForm;
