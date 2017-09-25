import { Component, OnInit } from '@angular/core';
import { CostarContactService } from './common/costar-contact.service';
import { CostarContactVM } from './common/costar-contact';

@Component({
    
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],


})
    

export class AppComponent implements OnInit {
    loggedContact: CostarContactVM;
    errorMessage: any;

    constructor(private costarContactService: CostarContactService) {}

    ngOnInit(): void {
        this.costarContactService.getLoggedContact()
            .subscribe(
            data => this.loggedContact = data,
            error => this.errorMessage = <any>error    
                );
                    
    }

    getNetworkContact(nwName: string): void {
        this.costarContactService.getNetworkContact(nwName).subscribe(data => {
            this.loggedContact = data;

        }
        )
        
    }
}