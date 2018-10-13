import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({menuOpen, logout, isAdmin, authenticated, currentTab, toggleMenu, goTo, appData}) => {

	function goToAndSet(tab){
		toggleMenu()
		goTo(tab)
	}
	let tabs = appData.tabs
	// if(isAdmin){
	// 	tabs.push({route:'settings',name:'הגדרות'})
	// }
	// if(!authenticated){
	// 	tabs.push({route:'login',name:'התחברות'})
	// }
	return (
	    <nav className="navbar navbar-default">
		  <div className="container-fluid container">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" onClick={toggleMenu} aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" onClick={toggleMenu}>{appData.appName}</a>
		    </div>
		    <div className={"collapse navbar-collapse" + (menuOpen ? " in":"")} id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		      {
		      	tabs.map( tab => 
		      		<li key={tab.route} className={"" + (currentTab === tab.route ? 'active' : '')}>
	      				<Link to={'/' + tab.route} onClick={()=>goToAndSet(tab.route)} >
	      					{tab.name}
		      			</Link>		
		      		</li>)
		      }
		      { authenticated &&
		      	<li onClick={logout}><a>התנתק</a></li>
		      }
		      </ul>
		    </div>
		  </div>
		</nav>
);
}
export default Header;
