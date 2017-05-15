import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class AddProjectForm extends Component {
  render() {
    //const { handleSubmit } = this.props;
    const handleSubmit = () => this.props;

    const contextData = [{
      contextElement: 'Java',
      contextExperience: 1.5
    }];

    const contextColumns = [{
      header: 'Élément',
      accessor: 'contextElement' // String-based value accessors!
      }, {
      header: 'Expérience',
      accessor: 'contextExperience'
    }];
    return (
      <form className="form-basic" onSubmit={handleSubmit}>
         <div className="form-title-row">
          <h1>Ajouter une réalisation</h1>
        </div>
        <div className="form-row" >
          <label htmlFor="client"><span>Client</span></label>
          <Field name="client" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <label htmlFor="mandat"><span>Mandat</span></label>
          <Field name="mandat" component="input" type="text"/>
        </div>
        <div className="form-row" >
          <h4>Description sommaire du mandat</h4>
          <div className="form-row" >
            <div className="col-md-6">
              <label htmlFor="projectstartdate"><span>Date de début</span></label>
              <Field name="projectstartdate" component="input" type="date" />
            </div>
            <div className="col-md-6">
              <label htmlFor="projectenddate"><span>Date de fin</span></label>
              <Field name="projectenddate" component="input" type="date" />
            </div>
          </div>
          <div className="form-row" >
            <div className="col-md-6">
              <label htmlFor="projectspan"><span>Envergure globale</span></label>
              <Field name="projectspan" component="input" type="number" placeholder="Jours-Personne" />
            </div>
            <div className="col-md-6">
              <label htmlFor="projectspanCGI"><span>Envergure CGI</span></label>
              <Field name="projectspanCGI" component="input" type="number" placeholder="Jours-Personne" />
            </div>
          </div>
          <div className="form-row" >
            <Field className="textareaProject" name="description" component="textarea" type="text" />
          </div>

          <div className="form-row" >
            <p>Période</p>
            <Field name="startdate" component="input" type="date" />
             au
            <Field name="enddate" component="input" type="date" />
          </div>
          <div className="form-row" >Durée maximale potentielle de l'intervention:</div>
          <div className="form-row" >
            Fonction(s)
          </div>
          <div className="form-row" >
            <p>Description de l'intervention</p>
            <Field name="roledescription" component="textarea" type="text" />
          </div>
          <div className="form-row" >
            <p>Contexte de l'intervention</p>
            <ReactTable
              data={contextData}
              columns={contextColumns}
              showPagination={false}
            />
          </div>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    );
  }
}

// Decorate the form component
AddProjectForm = reduxForm({
  form: 'addProjectForm' // a unique name for this form
})(AddProjectForm);

export default AddProjectForm;
