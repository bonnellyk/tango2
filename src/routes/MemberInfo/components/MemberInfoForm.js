import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class MemberInfoForm extends Component {
  render() {
    //const { handleSubmit } = this.props;
    const handleSubmit = () => this.props;
    const test1 = this.props;
    return (
      <form className="form-basic" onSubmit={handleSubmit}>
         <div className="form-title-row">
          <h1>Consulter un membre</h1>
        </div>
        <div className="form-row" >
          <label htmlFor="memberNetworkID"><span>ID réseau</span></label>
          <Field name="memberNetworkID" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="memberFirstname"><span>Prénom: </span></label>
          <Field name="memberFirstname" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="memberLastname"><span>Nom: </span></label>
          <Field name="memberLastname" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label><span>Genre: </span></label>
          <div className="form-radio-buttons">
            <div>
              <label><Field name="gender" component="input" type="radio" value="male"/> <span>Masculin</span></label>
            </div>
            <div>
             <label><Field name="gender" component="input" type="radio" value="female"/><span> Féminin</span></label>
            </div>
          </div>
        </div>
        <div className="form-row" >
          <label htmlFor="memberEmail"><span>Courriel: </span></label>
          <Field name="memberEmail" component="input" type="email"/>
        </div>
        <div className="form-row" >
          <label htmlFor="memberNumber"><span>Numéro d'employé: </span></label>
          <Field name="memberNumber" component="input" type="number"/>
        </div>
        <div className="form-row" >
          <label><span>Mode de CV: </span></label>
          <div className="form-radio-buttons">
            <div>
              <label><Field name="cvMode" component="input" type="radio" value="creation"/> <span>Création</span></label>
            </div>
            <div>
             <label><Field name="cvMode" component="input" type="radio" value="update"/><span> Mise à jour</span></label>
            </div>
          </div>
        </div>
        <div className="form-row" >
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
        <div className="form-row" >
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
        <div className="form-row" >
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
        <div className="form-row" >
          <label htmlFor="memberTitle"><span>Titre: </span></label>
          <Field name="memberTitle" component="select">
            <option value="consultant">Conseiller</option>
          </Field>
        </div>
        <div className="form-row" >
          <label htmlFor="memberSector"><span>Secteur: </span></label>
          <Field name="memberSector" component="select">
            <option value="ND">N/D</option>
          </Field>
        </div>
        <div className="form-row" >
          <label htmlFor="memberStatus"><span>Statut: </span></label>
          <Field className="disabled" name="memberStatus" component="select">
            <option value="permanent">Permanent</option>
            <option value="casual">Temporaire</option>
          </Field>
        </div>
        <div className="form-row" >
          <label htmlFor="memberDirector"><span>Gestionnaire: </span></label>
          <Field name="memberDirector" component="select">
            <option value="directorName">John Doe</option>
          </Field>
        </div>
        <div className="form-row" >
          <label><span>Expérience à ce jour: </span></label>
          <div className="col-md-6">
            <Field name="memberExperienceY" component="input" type="number"/>
            <span>année(s) et </span>
          </div>
          <div className="col-md-6">
            <Field name="memberExperienceM" component="input" type="number"/>
            <span> mois </span>
          </div>
        </div>
        <div className="form-row" >

        </div>
        <button type="submit">Enregistrer</button>
      </form>
    );
  }
}

// Decorate the form component
MemberInfoForm = reduxForm({
  form: 'memberInfoForm' // a unique name for this form
})(MemberInfoForm);


export default MemberInfoForm;
