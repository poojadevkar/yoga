import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../webapp/layout/login/login.component';

@Injectable({ providedIn: 'root' })
export class LoginModalService {
    private isOpen = false;//false
    constructor(private modalService: NgbModal) { }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = false//false
        const modalRef = this.modalService.open(LoginComponent);
        modalRef.result.then(
            result => {
                this.isOpen = false;//false
            },
            reason => {
                this.isOpen = false;//false
            }
        );
        return modalRef;
    }
}
