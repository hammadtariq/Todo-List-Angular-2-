import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app'
import {provide} from "angular2/core";
import {setBaseUrl, MATERIAL_PROVIDERS} from 'ng2-material/all';

setBaseUrl('https://cdn.rawgit.com/justindujardin/ng2-material/8ee9cee/');

bootstrap(AppComponent, [MATERIAL_PROVIDERS])
  .catch(err => console.error(err));
