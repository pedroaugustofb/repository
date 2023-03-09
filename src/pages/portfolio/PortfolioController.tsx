/**
 * Portfolio Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { Component } from "react";
import { ApiRepositories } from "../../services/ApiRepositories";

//types
import Repository from "../../types/Repository";

//view
import PortfolioView from "./PortfolioView";

type Props = {};

type State = {
  repositories: Repository[];
};

export default class Portfolio extends Component<Props, State> {
  state:State = {
    repositories: [],
  };

  componentDidMount() {
    const ApiRepository = new ApiRepositories();
    ApiRepository.getRepositories().then((response: Repository[]) => this.setState({ repositories: response }))
  }
  


  render() {
    const { repositories } = this.state;

    return <PortfolioView repositories={repositories}/>;
  }
}
