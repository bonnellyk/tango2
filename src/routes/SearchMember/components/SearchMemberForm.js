import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class SearchMemberForm extends Component {
  render() {
    //const { handleSubmit } = this.props;
    const handleSubmit = () => this.props;
    return (
      <form className="form-basic" onSubmit={handleSubmit}>
        <div className="form-title-row">
          <h1>Rechercher un membre</h1>
        </div>
        <div className="form-row">
          <label htmlFor="memberFirstname"><span>Prénom</span></label>
          <Field name="memberFirstname" component="input" type="text"/>
        </div>
        <div className="form-row">
          <label htmlFor="memberLastname"><span>Nom: </span></label>
          <Field name="memberLastname" component="input" type="text"/>
        </div>
        <div className="form-row">
          <label htmlFor="memberEmail"><span>Courriel: </span></label>
          <Field name="memberEmail" component="input" type="text"/>
        </div>
        <div className="form-row">
          <label htmlFor="resumeState"><span>État du CV: </span></label>
          <Field name="resumeState" component="select">
            <option></option>
            <option value="with">Avec CV</option>
            <option value="without">Sans CV</option>
            <option value="all">Tous</option>
          </Field>
        </div>
        <div className="form-row">
          <label htmlFor="oralEnglishLevel"><span>Niveau d'anglais parlé: </span></label>
          <Field name="oralEnglishLevel" component="select">
            <option></option>
            <option value="oall">Tous</option>
            <option value="obeginner">Débutant</option>
            <option value="ointermediate">Intermédiaire</option>
            <option value="oadvanced">Avancé</option>
            <option value="obilingual">Bilingue</option>
          </Field>
        </div>
        <div className="form-row">
          <label htmlFor="writingEnglishLevel"><span>Niveau d'anglais écrit: </span></label>
          <Field name="writingEnglishLevel" component="select">
            <option></option>
            <option value="wall">Tous</option>
            <option value="wbeginner">Débutant</option>
            <option value="wintermediate">Intermédiaire</option>
            <option value="wadvanced">Avancé</option>
            <option value="wbilingual">Bilingue</option>
          </Field>
        </div>
        <div className="form-row">
          <label htmlFor="readingEnglishLevel"><span>Niveau d'anglais lu: </span></label>
          <Field name="readingEnglishLevel" component="select">
            <option></option>
            <option value="rall">Tous</option>
            <option value="rbeginner">Débutant</option>
            <option value="rintermediate">Intermédiaire</option>
            <option value="radvanced">Avancé</option>
            <option value="rbilingual">Bilingue</option>
          </Field>
        </div>
        <button type="submit">Rechercher</button>
      </form>
    );
  }
}

// Decorate the form component
SearchMemberForm = reduxForm({
  form: 'searchMemberForm' // a unique name for this form
})(SearchMemberForm);

export default SearchMemberForm;
