// Libs & utils
import React, { Component } from 'react'
import { connect } from 'react-redux'

// CSS
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

// Components
import AppHeader from '../appHeader/AppHeader'

// Actions
import { appActions } from "../../core/app/index"
import { searchActions } from "../../core/search/index"

class App extends Component {

	componentWillUpdate(nextProps) {
		// Check if the current path has been changed, if so -> navigate to new path
		if (nextProps.app.currentPath  !== this.props.app.currentPath ) {
			this.props.router.push ( nextProps.app.currentPath)
		}
	}

	render () {
		return (
			<div className="app grid">

				<AppHeader
					search={this.props.search}
					user={this.props.user}
					toggleSearch={this.props.toggleSearch}
					handleSearch={this.props.handleSearch}
					router={this.props.router}
				/>

				<main className="main">
					{/* Render the childen component passed by react-router: */}
					{this.props.children}
				</main>

			</div>
		)
	}
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = ( state ) => {
	return {
		search : state.search,
		user: state.user,
		app: state.app
	}
}

const mapDispatchToProps = {
	navigateToPath: appActions.navigateToPath,
	handleSearch: searchActions.handleSearch,
	toggleSearch: searchActions.toggleSearchField
}

App = connect ( mapStateToProps, mapDispatchToProps ) ( App )

export default App
