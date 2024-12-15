import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
// import { Component } from ""
@Component({
    standalone:true,
    imports:[RouterModule,SidemenuComponent],
    templateUrl:'./yminimarket.component.html',
    styleUrl:'./yminimarket.component.html',
})
export default class YminimarketComopnent{

}