import React,{Component} from 'react';
export default class Breadcrumb extends React.Component{
render(){
  return(
<div class="col-md-12">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/employee/list">Employee</a></li>
    </ol>
  </nav>
  </div>

);
}
}
