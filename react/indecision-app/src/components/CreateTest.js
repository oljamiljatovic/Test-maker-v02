import React from 'react';
import Header from './Header';
import SubjectList from './SubjectList';
import { Route, BrowserRouter } from 'react-router';
import { withRouter } from 'react-router-dom';
class CreateTest extends React.Component {

  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
    this.addTest = this.addTest.bind(this);
    this.changeStateOfDivParameters = this.changeStateOfDivParameters.bind(this);
    this.state = {
      questionList: [],
      subjectId: '',
      divForParametersVisibility : false
    };
  }

  componentDidMount() {
    this.setState({ subjectId: localStorage.getItem('subjectID') })
  }
  getQuestions(questions) {
    this.setState({ questionList: questions })
  }

  addTest(e) {
    e.preventDefault();
    let test = {};
    test = {
      name: e.target.elements.name.value,
      questionList: this.state.questionList,
      label: e.target.elements.label.value,
      groupTag: e.target.elements.group.value,
      materials: e.target.elements.materials.value,
      skal: e.target.elements.skal.value == "" ? 1 : e.target.elements.skal.value,
      negod: e.target.elements.negod.value == "" ? 1 : e.target.elements.negod.value,
      poz: e.target.elements.poz.value == "" ? 1 : e.target.elements.poz.value,
      neg: e.target.elements.neg.value == "" ? -1 : e.target.elements.neg.value,
      ispt: e.target.elements.ispt.value == "" ? 0 : e.target.elements.ispt.value,
      edit: e.target.elements.edit.value == "" ? 0 : e.target.elements.edit.value,
      srand: e.target.elements.srand.value == "" ? 0 : e.target.elements.srand.value,
      sviodg: e.target.elements.sviodg.value == "" ? 1 : e.target.elements.sviodg.value,
      testp: e.target.elements.testp.value == "" ? 0 : e.target.elements.testp.value,
      detalji: e.target.elements.detalji.value == "" ? 1 : e.target.elements.detalji.value,
    }


    const url = 'http://localhost:8080/addTest/' + this.state.subjectId;
    let fetchData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      response: true,
      body: JSON.stringify(test)
    }
    fetch(url, fetchData)
      .then(res => res.json())
      .then(this.props.history.push('/testList'));

  }

  changeStateOfDivParameters(e){
    e.preventDefault();
      this.setState({ divForParametersVisibility : !this.state.divForParametersVisibility })
  }

  render() {
    return (

      <div>
        <Header activeLink="createTest" />
     <form onSubmit={this.addTest}> 
          <div className="row  ">

          <div className="col-lg-1">
          <div className="row">
             <div className="col-lg-1"></div>
             </div>
          </div>
            <div className="col-lg-5 form-group">
              <div className="row">
                <div className="offset-lg-2 col-lg-4 offset-lg-1 form-group">
                  <label >Naziv testa*</label>
                  <input className="form-control" type="text" name="name" />
                </div>
                <div className="offset-lg-1 col-lg-4 offset-lg-1 form-group">
                  <label>Oznaka testa*</label>
                  <input className="form-control" type="text" name="label" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 form-group  ">
              <div className="row">
                <div className="offset-lg-1 col-lg-4 offset-lg-1 form-group">
                  <label>Grupa*</label>
                  <input className="form-control" type="text" name="group" />
                </div>
                <div className="offset-lg-1 col-lg-4  form-group">
                  <label>Materijali</label>
                  <input className="form-control" type="text" name="materials" />
               
                </div>
                <div className = "form-group">
                  <label className = "small_font_size">&nbsp;</label>
                  <button type="button" className = "rounded-button btn-lg button-primary-color  fa fa-arrow-down drop_down_button"
                    onClick={(e) => {
                      e.stopPropagation();
                      this.changeStateOfDivParameters(e);
                  }}/>
                </div>
              </div>
            </div>

            
          </div>
       
      
         
<div   className={this.state.divForParametersVisibility === true ? 'parametersForTestShow ' : 'parametersForTestHidden'}    >
          <div className="row padding-left-test ">
            <div className=" col-lg-2 form-group">
              <label>SKAL</label>
              <input className="form-control" type="text" name="skal" placeholder="1" />
            </div>
            <div className="col-lg-2 form-group">
              <label>NEGOD</label>
              <input className="form-control" type="text" name="negod" placeholder="1" />
            </div>
            <div className="col-lg-2 form-group">
              <label>POZ</label>
              <input className="form-control" type="text" name="poz" placeholder="1" />
            </div>
            <div className="col-lg-2 form-group">
              <label>NEG</label>
              <input className="form-control" type="text" name="neg" placeholder="-1" />
            </div>
            <div className="col-lg-2 form-group">
              <label>ISPT</label>
              <input className="form-control" type="text" name="ispt" placeholder="0" />
            </div>
          </div>

          <div className="row padding-left-test">
            <div className=" col-lg-2 form-group">
              <label>EDIT</label>
              <input className="form-control" type="text" name="edit" placeholder="0" />
            </div>
            <div className="col-lg-2 form-group">
              <label>SRAND</label>
              <input className="form-control" type="text" name="srand" placeholder="0" />
            </div>
            <div className="col-lg-2 form-group">
              <label>SVIODG</label>
              <input className="form-control" type="text" name="sviodg" placeholder="1" />
            </div>
            <div className="col-lg-2 form-group">
              <label>TESTP</label>
              <input className="form-control" type="text" name="testp" placeholder="0" />
            </div>
            <div className="col-lg-2 form-group">
              <label>DETALJI</label>
              <input className="form-control" type="text" name="detalji" placeholder="1" />
            </div>
          </div>
  </div>
          <div className="row">
            <div className=" col-lg-12">
              <SubjectList  canAddSubjectShow={false}  isCreateTest={true} getQuestions={this.getQuestions} />
            </div>
          </div>

          <div className="offset-lg-4 col-lg-4  offset-lg-4 form-padding">
            <button className="btn button-primary-color btn-lg btn-block"
            >Dodaj test </button>
          </div>

    </form> 
      </div>

    );
  }
}

export default withRouter(CreateTest)