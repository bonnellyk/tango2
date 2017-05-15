import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-basic" onSubmit={handleSubmit}>
         <div className="form-title-row">
          <h1>Connexion</h1>
        </div>
        <div className="form-row">
          <label htmlFor="username"><span>Nom d'utilisateur</span></label>
          <Field name="username" component="input" type="text"/>
        </div>
        <div className="form-row">
          <label htmlFor="password"><span>Mot de passe</span></label>
          <Field name="password" component="input" type="password"/>
        </div>
        <button type="submit">Connexion</button>
      </form>
    );
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'tango_login' // a unique name for this form
})(LoginForm);

export default LoginForm;
