import React, { Component } from "react";
import { Router } from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import ArticlePage from "./views/ArticlePage";
import ResponseModal from "./components/Admin/Modal";
import userStore from './stores/user'
import articleStore from './stores/article'
import { getAll } from "./api/article";
// import styled from "styled-components";

class App extends Component {
  async componentDidMount() {
    userStore.init();
    articleStore.articles = await getAll();
  }

  render() {
    return (
      <div className="App">
        <ResponseModal />
        <Router defaultPage="home">
          <HomePage page="home" />
          <LoginPage page="login" />
          <AdminPage page="admin" />
          <ArticlePage page="articles" />
        </Router>
      </div>
    );
  }
}

export default App;
