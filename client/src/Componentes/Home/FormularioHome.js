import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import Search from "../DataGrid/Search";

import Page from "../DataGrid/Page";
import data from "../Card/data";
import { setFormulario } from "../../Redux/actions/martianSolAction";

function FormularioHome({ formHomeToHome }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      roverName: "",
      camara: "",
      MartianSun: "",
      EarthDate: "",
      formularioOk: false,
    },
  });

  const handleRegistration = (data) => {
    console.log(data);
    data.formularioOk = true;

    changePage(data);
  };

  const dispatch = useDispatch();

  const formulario = useSelector((state) => state.formulario);

  const changePage = (formulario) => {
    return dispatch(setFormulario(formulario));
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className="selection">
        <div className="firstRow">
          <div className="flexbox">
            {/* Select Rover*/}

            <div className="rover">
              <div id="rovers-type">
                Rover{" "}
                <select name="choiceOrder" {...register("roverName")}>
                  <option value="lastest">Lastest</option>
                  <option value="Curiosity">Curiosity</option>
                  <option value="Opportunity">Opportunity</option>
                  <option value="Spirit">Spirit</option>
                </select>
              </div>
            </div>
            {/*Fin */}
          </div>
          <div className="flexbox">
            {/* Select Camara */}
            <div className="filter">
              <div id="filter-type">
                Filter by Camaras{" "}
                <select
                  name="choiceFilterOrigen"
                  {...register("camara")}
                  // value={this.props.size}
                  // onChange={this.handleSelectFilterType}
                >
                  <option value=" ">ALL</option>
                  <option value="fhaz">FHAZ</option>
                  <option value="rhaz">RHAZ</option>
                  <option value="mast">MAST</option>
                  <option value="chemcam">CHEMCAM</option>
                  <option value="mahli">MAHLI</option>
                  <option value="mardi">MARDI</option>
                  <option value="navcam">NAVCAM</option>
                  <option value="pancam">PANCAM</option>
                  <option value="minites">MINITES</option>
                </select>
              </div>
            </div>
            {/*Fin */}
          </div>
        </div>
        <div className="secondRow">
          {" "}
          <div className="flexbox">
            {/*Input de Martian Sol */}

            <div className="martianSun">
              <div className="martianSun-type">
                Martian Sol{" "}
                <input
                  type="search"
                  className="input"
                  placeholder=""
                  name="martianSun"
                  {...register("MartianSun")}
                />
              </div>
              <div></div>
            </div>

            {/* Fin */}
          </div>
          <div className="flexbox">
            {/* input de EarthDate */}

            <div className="detalle">
              <div id="detalle-type">
                Earth Date <input {...register("EarthDate")} />
              </div>
            </div>

            {/* Fin */}
          </div>
        </div>
        <div className="thirdRow">
          <div>
            {" "}
          
            <Search />
          </div>{" "}
        </div>
        <div className="fourthRow">
          <div>
            {" "}
            <Page />
          </div>{" "}
        </div>
      </div>
    </form>
  );
}

export default FormularioHome;
