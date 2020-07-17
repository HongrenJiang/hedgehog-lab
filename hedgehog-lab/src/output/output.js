import Plot from 'react-plotly.js';

import  React, {Component, Label}  from 'react';

import OutputItem from './output_item';

import MathJax from 'react-mathjax';

import TextareaAutosize from '@material-ui/core'; 

var Markdown = require('react-markdown');

class Output extends React.Component {

    render() {
      const list_items = this.props.outputItemList.map(
           (element) =>{
              if (element.isDraw()){
                  return <Plot data={element.data} layout={element.layout} />;
              }

              else if (element.isTex()) {
                  return <MathJax.Provider>
                      <div>
                            <MathJax.Node inline formula = {element.text}/>
                      </div>
                  </MathJax.Provider>
              }

              else if (element.isFormulaTex()){
                  return <MathJax.Provider>
                  <div>
                        <MathJax.Node formula = {element.text}/>
                  </div>
              </MathJax.Provider>
              }

              else if (element.isMarkdown()){
                  return <Markdown source={element.text} /> 
              }
          }
      );
      return (
        <div>
          {list_items} 
        </div>
      );
    }
  }

  export default Output;