import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../API/data';

import Footer from './footer';

//import { getPost, getPosts } from "./api";
function RenderIngredients({ ingriedientsdata }) {
  console.log(ingriedientsdata.content);
  const result = ingriedientsdata.content;

  return result.map((iteration) => {
    let unorderedlist;
    let paragraph;
    if (iteration.nodeType === 'unordered-list') {
      const listdata = iteration.content;
      unorderedlist = listdata.map((item) => {
        return (
          <li className='list-group-item'>
            {item.content[0].content[0].value}
          </li>
        );
      });
    }

    if (iteration.nodeType === 'paragraph') {
      const paragraphdata = iteration.content;

      paragraph = paragraphdata.map((item) => {
        console.log(item.value);
        return (
          <p>
            {item.value}
            test
          </p>
        );
      });
    }
    return (
      <>
        <ul
          className='list-group list-group-numbered list-group-flush'
          style={{ textAlign: 'left' }}
        >
          {unorderedlist}
        </ul>
        {paragraph}
      </>
    );
  });
}
function RenderInstructions({ instructionsdata }) {
  console.log(instructionsdata.content);
  const result = instructionsdata.content;
  // const [unorderedlist, setunorderedlist] = useState();

  return result.map((iteration) => {
    let unorderedlist;
    let paragraph;
    if (iteration.nodeType === 'unordered-list') {
      const listdata = iteration.content;
      unorderedlist = listdata.map((item) => {
        return (
          <li className='list-group-item'>
            {item.content[0].content[0].value}
          </li>
        );
      });
    }

    if (iteration.nodeType === 'paragraph') {
      const paragraphdata = iteration.content;

      paragraph = paragraphdata.map((item) => {
        console.log(item.value);
        return <p>{item.value}</p>;
      });
    }
    return (
      <>
        <ul
          className='list-group list-group-numbered list-group-flush'
          style={{ textAlign: 'left' }}
        >
          {unorderedlist}
        </ul>
        {paragraph}
      </>
    );
  });
}
const article = (data) => {
  const result = data[0].fields;

  return (
    <>
      <div className='container '>
        <div className='umarecipe ' style={{ textAlign: 'center' }}>
          <div className='container'>
            <h4 className='display-4 font-weight-light text-danger '>
              <span className='text-warning'>{result.name}</span>
            </h4>
            <div className='row d-flex flex-row justify-content-center mb-4'>
              <div className='col-md-4'>
                <p>
                  Cooks in <strong> 2 Hours, 00 Minutes</strong>
                </p>
              </div>
              <div className='col-md-'>
                <p>
                  Difficulty <strong>{result.difficulty}</strong>
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  Servings <strong> 8 portions</strong>
                </p>
              </div>
            </div>
            <div className='box text-center '>
              <img
                alt='imgdetails'
                img
                src={result.image.fields.file.url}
                title='Chicken Biryani '
              />
            </div>
            <div className='p-4 my-4 bg-light'>
              <br />
              <p className='first_letter'>{result.description}</p>
            </div>
            <br />
            <div className='row justify-content-center m-0 p-0 '>
              <h4 className='display-4 text-muted text-center py-5'>
                <u>Ingredients</u>
              </h4>
              <RenderIngredients ingriedientsdata={result.ingredients} />
            </div>
            <div className='container m-5'>
              <h4 className='display-4 text-muted text-center py-5'>
                <u>Preparation</u>
              </h4>
              <RenderInstructions instructionsdata={result.instructions} />
            </div>
          </div>
          <div className='container d-flex flex-column align-items-start justify-content-center'>
           
          </div>
        </div>
      </div>
    </>
  );
};

const Recipe = () => {
  const { recipename } = useParams();
  const [fetchdata, setFetchdata] = useState();

  useEffect(() => {
    (async () => {
      getRecipes()
        .then((jsonobj) =>
          jsonobj.filter((data) => data.fields.name === recipename)
        )
        .then((jsonobj) => setFetchdata(article(jsonobj)));
    })();
  }, [recipename]);

  return <>{fetchdata}</>;
};

export default Recipe;
