import React from 'react';
import { connect } from 'react-redux';

import "@material/icon-button";
import "@material/top-app-bar/mdc-top-app-bar";

import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


function TopBar(props) {
    return(
        <div>
            <header class="mdc-top-app-bar">
                <div class="mdc-top-app-bar__row">
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
                        <span class="mdc-top-app-bar__title">Page title</span>
                    </section>
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
                    </section>
                </div>
            </header>
            <main class="mdc-top-app-bar--fixed-adjust">
            App content
            </main>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps)(TopBar);