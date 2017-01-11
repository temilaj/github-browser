"use strict";
var router_1 = require('@angular/router');
var profile_component_1 = require('./components/profile.component');
var about_component_1 = require('./components/about.component');
var appRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map