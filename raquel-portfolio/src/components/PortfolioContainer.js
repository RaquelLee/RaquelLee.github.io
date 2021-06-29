import React, { Component } from "react";
import About from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import Contact from "./pages/Contact";
import HeaderNav from "./Header";

class Portfolio extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "PortfolioPage") {
            return <PortfolioPage />;
        } else {
            return <Contact />;
        }
    };

    render() {
        return (
            <div>
                <HeaderNav
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Portfolio;
