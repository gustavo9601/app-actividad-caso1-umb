import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public toastController: ToastController) {
    }


    op:boolean= false;


    async mostrarToast() {
        const toast = await this.toastController.create({
            message: (this.op) ? 'UMB Agregada a favoritos': 'Bienvenido a la UMB Virtual.',
            duration: 2000
        });
        toast.present();
    }


    async mostrarToastConOpciones() {
        const toast = await this.toastController.create({
            header: 'Mensaje',
            message: 'Click para cerrar',
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorito',
                    handler: () => {
                        this.op = true;
                        this.mostrarToast();
                        this.op = false;
                    }
                }, {
                    text: 'Ok',
                    role: 'cancel',
                    handler: () => {
                        return;
                    }
                }
            ]
        });
        toast.present();
    }


}
