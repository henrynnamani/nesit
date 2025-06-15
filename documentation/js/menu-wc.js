'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nesit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                            'id="xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                        'id="xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' :
                                            'id="xs-controllers-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' :
                                        'id="xs-injectables-links-module-AuthModule-24b0d70fb9e61b33070c4df51426e18cc5f3c9bae9f2829e2a910c4f78324c8e8c989112d1a417c94c3ddcfa53d6523e8a20db05fe426fae9442c40195bc106b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' :
                                            'id="xs-controllers-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' :
                                        'id="xs-injectables-links-module-PostsModule-2928f954230fff61a571dbbf734b2defd66965dfb50adfcc071390cf019be691acbaa6a28c41aee1d758cf78205eb1ca2d910b7c1da24f56169fc59c1dfda6d2"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' :
                                            'id="xs-controllers-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' :
                                        'id="xs-injectables-links-module-UsersModule-e056b3db6eaac9bed1a1548d1e88149cf0f1a9b77605c134e44a1ec227eec9b8b84855f631d8d2ee8e1ea3542317c2898e23b3372c09561c94c2e89c018bac88"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionDto.html" data-type="entity-link" >CreatePostMetaOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostQueryParamDto.html" data-type="entity-link" >GetPostQueryParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});